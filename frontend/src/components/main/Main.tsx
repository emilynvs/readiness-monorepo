"use client";

import { TarefaProvider, useTarefas } from "@/context/TarefaContext";
import Link from "next/link";

export const Main = () => {
  const { tarefas, loading } = useTarefas();

  if (loading) {
    return <p> Carregando tarefas...</p>;
  }

  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>;
  }
  return (
    <section className="grid grid-cols-4 lg:grid-cols-4 gap-3 m-5">
      {tarefas.map((tarefa) => (
        <div
          key={tarefa.id}
          className="flex gap-3 p-2 border-2 border-solid rounded-xl  flex-col justify-center"
        >
          <span className="font-semibold">{tarefa.titulo}</span>

          <span>
            Criada em: {new Date(tarefa.createdAt).toLocaleDateString()}
          </span>
          <Link
            href={`/cronometro/${tarefa.id}`}
            className="border-2 border-solid rounded-xl  w-15 text-center"
          >
            Foco
          </Link>
        </div>
      ))}
    </section>
  );
};
