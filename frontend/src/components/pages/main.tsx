"use client";

import { useState } from "react";
import Card from "../molecules/card/Card";
import InputAdicao from "../molecules/inputAdicao/InputAdicao";
import { useTarefas } from "@/context/TarefaContext";

const Main = () => {
  const [tarefa, setTarefa] = useState("");

  const { tarefas, loading, updateCheck, addTarefa } = useTarefas();
  console.log(tarefas);
  const handleAdicionar = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!tarefa.trim()) return;
    await addTarefa(tarefa);
    setTarefa("");
  };

  const handleConcluir = (t: any) => {
    return updateCheck(t.id);
  };

  return (
    <div className=" h-full">
      <InputAdicao
        onClick={handleAdicionar}
        value={tarefa}
        onChange={(e: any) => setTarefa(e.target.value)}
      />
      <div className="flex flex-row flex-wrap w-full">
        {tarefas.map((t) => {
          return (
            <Card
              text={t.titulo}
              key={t.id}
              concluido={t.concluido}
              onConcluido={() => handleConcluir(t)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
