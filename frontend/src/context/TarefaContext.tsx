"use client";

import { tarefaService } from "@/services/tarefaService";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Tarefa {
  id: string;
  titulo: string;
  concluido: boolean;
  createdAt: string;
}

interface TarefaContextData {
  tarefas: Tarefa[];
  addTarefa: (title: string) => Promise<void>;
  loading: boolean;
  updateCheck: (id: string) => Promise<void>;
  deletarTarefa: (id: string) => Promise<void>;
}

const TarefaContext = createContext<TarefaContextData>({} as TarefaContextData);

export const TarefaProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTarefas = async () => {
      try {
        const dados = await tarefaService.listar();
        setTarefas(dados);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    loadTarefas();
  }, [tarefas]);

  const addTarefa = async (titulo: string) => {
    try {
      const novaTarefa = await tarefaService.criar(titulo);
      setTarefas((prev) => [...prev, novaTarefa]);
    } catch (error) {
      console.error("Erro ao criar tarefa: ", error);
    }
  };

  const updateCheck = async (id: string) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluido: !t.concluido } : t)),
    );
    try {
      const checkAtualizado = await tarefaService.atualizarCheck(id);
    } catch (error) {
      console.error("Erro ao localizar tarefa", error);
    }
  };

  const deletarTarefa = async (id: string) => {
    try {
      const tarefaDeletada = await tarefaService.deletarTarefa(id);
      setTarefas((prev) => [...prev]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TarefaContext.Provider
      value={{ tarefas, updateCheck, addTarefa, loading, deletarTarefa }}
    >
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => useContext(TarefaContext);
