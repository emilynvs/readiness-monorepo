"use client";

import { useTarefas } from "@/context/TarefaContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Concluidas() {
  const router = useRouter();
  const pararEVoltar = () => {
    setAtivo(false);
    router.push("/");
  };

  const [ativo, setAtivo] = useState(false);
  const { tarefas } = useTarefas();
  const tarefasFiltradas = tarefas.filter(
    (tarefa) => tarefa.concluido === true,
  );

  return (
    <section className="grid grid-cols-4 lg:grid-cols-4 gap-3 m-5">
      {tarefasFiltradas.map((tarefa) => (
        <div
          key={tarefa.id}
          className="flex gap-3 p-2 border-2 border-solid rounded-xl  flex-col justify-center"
        >
          <span>{tarefa.titulo}</span>
        </div>
      ))}
    </section>
  );
}
