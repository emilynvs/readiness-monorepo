"use client";

import Card from "@/components/molecules/card/Card";
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
        <Card
          text={tarefa.titulo}
          key={tarefa.id}
          concluido={tarefa.concluido}
        />
      ))}
    </section>
  );
}
