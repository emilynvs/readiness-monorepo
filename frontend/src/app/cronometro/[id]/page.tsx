"use client";

import { useTarefas } from "@/context/TarefaContext";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cronometro() {
  const { id } = useParams();
  const { tarefas } = useTarefas();
  const router = useRouter();

  const pararEVoltar = () => {
    setAtivo(false);
    router.push("/");
  };

  const tarefaAtual = tarefas.find((t) => t.id === id);

  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo: any = null;

    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [ativo]);

  const formatarTempo = () => {
    const minutos = Math.floor(segundos / 60);

    const restoSegundos = segundos % 60;

    return `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")}`;
  };

  if (!tarefaAtual) return <p>Tarefa não encontrada...</p>;

  return (
    <div>
      <h1>Focando em: {tarefaAtual.titulo}</h1>

      <div>{formatarTempo()}</div>
      <div>
        <button onClick={() => setAtivo(!ativo)}>
          {ativo ? "Pausar" : "Iniciar"}
        </button>

        <button
          onClick={() => {
            setSegundos(0);
            setAtivo(false);
          }}
        >
          Reiniciar
        </button>

        <button onClick={pararEVoltar}>Voltar para a lista</button>
      </div>
    </div>
  );
}
