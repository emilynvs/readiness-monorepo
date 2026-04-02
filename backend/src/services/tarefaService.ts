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
