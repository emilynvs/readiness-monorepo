"use client";

import { TarefaProvider, useTarefas } from "@/context/TarefaContext";
import Link from "next/link";

export const Main = () => {
  const { tarefas, loading } = useTarefas();

  if (loading) {
    return (
      <p className="flex justify-center items-center text-xl text-center w-full m-4 my-20 text-base">
        <svg
          className="mr-2 size-5 animate-spin "
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Carregando tarefas...
      </p>
    );
  }

  if (tarefas.length === 0) {
    return (
      <p className="flex justify-center text-xl text-center w-full m-4 my-20">
        Nenhuma tarefa cadastrada. adicione sua primeira tarefa
      </p>
    );
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
          <div className="flex gap-2">
            <Link
              href={`/cronometro/${tarefa.id}`}
              className="flex items-center justify-center border-2 border-solid border-white rounded-xl w-15 h-8 text-base font-medium antialiased leading-none transition-colors duration-500 hover:bg-slate-500 hover:text-white hover:border-slate-500 cursor-pointer outline-none"
            >
              Foco
            </Link>
            <button className="flex items-center justify-center gap-1 border-2 border-white rounded-xl w-23 h-8 bg-white text-black text-base font-medium antialiased leading-none transition-colors duration-500 hover:bg-slate-500 hover:text-white cursor-pointer outline-none hover:border-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-4 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="text-sm font-medium">Concluida</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
