import { prisma } from "../database/prisma";
import { CreateTarefaDTO } from "../models/tarefaDTO";

export const listAllTarefas = async () => {
  return await prisma.tarefa.findMany();
};

export const create = async (dados: CreateTarefaDTO) => {
  if (dados.titulo === "" || dados.titulo === undefined) {
    throw new Error("Erro ao salvar tarefa, título está vazio.");
  }
  return await prisma.tarefa.create({
    data: {
      titulo: dados.titulo,
      concluido: false,
      createdAt: new Date(),
      descricao: "",
    },
  });
};

export const updateCheck = async (id: string) => {
  const tarefaEncontrada = await findById(id);

  if (!tarefaEncontrada) throw new Error("Tarefa não encontrada");

  return await prisma.tarefa.update({
    where: {
      id,
    },
    data: {
      concluido: !tarefaEncontrada.concluido,
    },
  });
};

export const updateTask = async (
  id: string,
  texto: string,
  descricao: string,
) => {
  const tarefaEncontrada = await findById(id);

  if (!tarefaEncontrada) throw new Error("Tarefa não encontrada");

  return await prisma.tarefa.update({
    where: {
      id,
    },
    data: {
      titulo: texto,
      descricao: descricao,
    },
  });
};

export const findById = async (id: string) => {
  return await prisma.tarefa.findUnique({
    where: {
      id,
    },
  });
};

export const deletarTarefa = async (id: string) => {
  const tarefaEncontrada = await findById(id);

  if (!tarefaEncontrada) throw new Error("Tarefa não encontrada");

  return await prisma.tarefa.delete({
    where: {
      id,
    },
  });
};
