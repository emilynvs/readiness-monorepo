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
    <form onSubmit={handleSubmit}>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Objetivo de hoje"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};
