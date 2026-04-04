import { prisma } from "../database/prisma";
import { CreateTarefaDTO } from "../models/tarefaDTO";

export const listAllTarefas = async () => {
  return await prisma.tarefa.findMany();
};

export const create = async (dados: CreateTarefaDTO) => {
  return await prisma.tarefa.create({
    data: {
      titulo: dados.titulo,
      concluido: false,
      createdAt: new Date(),
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

export const findById = async (id: string) => {
  return await prisma.tarefa.findUnique({
    where: {
      id,
    },
  });
};
