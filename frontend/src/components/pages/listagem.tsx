"use client";

import { useState } from "react";
import Card from "../molecules/card/Card";
import InputAdicao from "../molecules/inputAdicao/InputAdicao";
import { useTarefas } from "@/context/TarefaContext";
import CardModal from "../organisms/CardModal";
import { Tarefa } from "@/types";

const Listagem = () => {
  const [tarefa, setTarefa] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<Tarefa | null>(
    null,
  );

  const {
    tarefas,
    loading,
    updateCheck,
    addTarefa,
    deletarTarefa,
    updateTarefa,
  } = useTarefas();

  const handleAdicionar = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!tarefa.trim()) return;
    await addTarefa(tarefa);
    setTarefa("");
  };

  const handleConcluir = (t: any) => {
    return updateCheck(t.id);
  };

  const handleDeletar = (t: any) => {
    return deletarTarefa(t.id);
  };

  const handleAtualizar = (id: string, texto: string, descricao: string) => {
    return updateTarefa(id, texto, descricao);
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
            <div key={t.id}>
              <Card
                text={t.titulo}
                key={t.id}
                concluido={t.concluido}
                onDelete={() => handleDeletar(t)}
                onConcluido={() => handleConcluir(t)}
                descricao={t.descricao}
                onEdit={() => {
                  setTarefaSelecionada(t);
                  setOpenModal(true);
                }}
              />
            </div>
          );
        })}
      </div>
      <CardModal
        open={openModal}
        texto={tarefaSelecionada?.titulo ?? ""}
        onClose={() => {
          setOpenModal(false);
          setTarefaSelecionada(null);
        }}
        onSave={(text: any, descricao: any) => {
          if (!tarefaSelecionada) return;
          handleAtualizar(tarefaSelecionada.id, text, descricao);

          setOpenModal(false);
          setTarefaSelecionada(null);
        }}
        descricao={tarefaSelecionada?.descricao}
        criadoEm={tarefaSelecionada?.createdAt}
      />
    </div>
  );
};

export default Listagem;
