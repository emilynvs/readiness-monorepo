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
    <section>
      <h2>Minhas tarefas</h2>

      <div>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id}>
            <div>
              <span>{tarefa.titulo}</span>
              <span>
                Criada em: {new Date(tarefa.createdAt).toLocaleDateString()}
              </span>
            </div>

            <Link href={`/cronometro/${tarefa.id}`}>Foco</Link>
          </div>
        ))}
      </div>
    </section>
  );
};
