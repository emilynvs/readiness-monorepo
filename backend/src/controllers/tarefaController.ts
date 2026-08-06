import { Request, Response } from "express";

import * as tarefaService from "../services/tarefaService";
import { CreateTarefaDTO } from "../models/tarefaDTO";
import { Tarefa } from "@prisma/client";

export const getAll = async (req: Request, res: Response) => {
  try {
    const tarefas = await tarefaService.listAllTarefas();
    return res.json(tarefas);
  } catch (error) {
    console.error("Erro ao encontrar tarefas");
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const dados: CreateTarefaDTO = req.body;
    if (!dados.titulo) {
      return res.status(400).json({ error: "A tarefa está vazia" });
    }
    const tarefa = await tarefaService.create(dados);
    return res.status(201).json(tarefa);
  } catch (error) {
    console.error("Erro ao cadastrar tarefa: ", error);
    return res.status(500).json({
      error: "Erro interno ao cadastrar tarefa",
      details: error,
    });
  }
};

export const updateCheck = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const tarefa = await tarefaService.updateCheck(id);
    return res.status(200).json(tarefa);
  } catch (error) {
    console.error("Erro ao concluir tarefa");
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const { titulo } = req.body as { titulo: string };
    const tarefaAtualizada = await tarefaService.updateTask(id, titulo);
    return res.status(200).json(tarefaAtualizada);
  } catch (error) {
    console.error("Erro ao editar tarefa, reinicie a pagina e tente novamente");
  }
};

export const deletarTarefa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const descarte = await tarefaService.deletarTarefa(id);
  } catch (error) {
    console.error("Erro ao deletar tarefa");
  }
};
