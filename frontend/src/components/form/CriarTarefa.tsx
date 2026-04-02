"use client";

import { useTarefas } from "@/context/TarefaContext";
import { useState } from "react";

export const CriarTarefa = () => {
  const [texto, setTexto] = useState("");
  const { addTarefa } = useTarefas();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!texto.trim()) return;

    await addTarefa(texto);
    setTexto("");
  };

  return (
    <section className="flex flex-col m-5 gap-4">
      <h2 className="text-3xl font-semibold text-center w-full m-4">
        Minha lista de tarefas
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-row gap-3">
        <input
          className="border-2 border-solid rounded-xl w-80 px-3"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Objetivo de hoje"
        />
        <button
          type="submit"
          className="px-2  border-solid rounded-xl bg-white text-black transition-colors 
          duration-600 hover:bg-slate-500 hover:text-white cursor-pointer border-none outline-none"
        >
          Adicionar
        </button>
      </form>
    </section>
  );
};
