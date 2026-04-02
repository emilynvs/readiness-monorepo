import { Request, Response } from "express";

import * as tarefaService from "../services/tarefaService";
import { CreateTarefaDTO } from "../models/tarefaDTO";

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
