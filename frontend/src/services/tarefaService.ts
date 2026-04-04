import api from "./api";
import { Tarefa } from "../types";

export const tarefaService = {
  listar: async (): Promise<Tarefa[]> => {
    const response = await api.get("/tarefas");
    return response.data;
  },

  criar: async (titulo: string) => {
    const response = await api.post("/tarefas/criar", { titulo });
    return response.data;
  },

  atualizarCheck: async (id: string) => {
    const response = await api.put(`/tarefas/atualizarCheck/${id}`);
    return response.data;
  },
};
