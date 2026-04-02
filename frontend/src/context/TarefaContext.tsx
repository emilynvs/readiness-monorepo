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
  }, []);

  const addTarefa = async (titulo: string) => {
    try {
      const novaTarefa = await tarefaService.criar(titulo);
      setTarefas((prev) => [...prev, novaTarefa]);
    } catch (error) {
      console.error("Erro ao criar tarefa: ", error);
    }
  };

  return (
    <TarefaContext.Provider value={{ tarefas, addTarefa, loading }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => useContext(TarefaContext);
