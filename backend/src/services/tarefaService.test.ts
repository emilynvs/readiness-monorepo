import { prisma } from "../database/prisma";
import * as tarefaService from "../services/tarefaService";

jest.mock("../database/prisma", () => ({
  prisma: {
    tarefa: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

describe("TarefaService", () => {
  const dados = {
    id: expect.any(String),
    titulo: "Batata",
    concluido: false,
    createdAt: expect.any(Date),
  };

  const listaDados = [
    {
      id: "a1b2c3d4",
      titulo: "Batata",
      concluido: false,
      createdAt: new Date("2026-08-23T10:00:00Z"),
    },
    {
      id: "e5f6g7h8",
      titulo: "Cenoura",
      concluido: false,
      createdAt: new Date("2026-08-23T10:05:00Z"),
    },
    {
      id: "i9j0k1l2",
      titulo: "Tomate",
      concluido: false,
      createdAt: new Date("2026-08-23T10:10:00Z"),
    },
    {
      id: "m3n4o5p6",
      titulo: "Alface",
      concluido: false,
      createdAt: new Date("2026-08-23T10:15:00Z"),
    },
    {
      id: "q7r8s9t0",
      titulo: "Cebola",
      concluido: false,
      createdAt: new Date("2026-08-23T10:20:00Z"),
    },
  ];
  const t = { titulo: "Batata" };

  it("deve criar tarefa com sucesso", async () => {
    jest.spyOn(prisma.tarefa, "create").mockResolvedValue(dados as any);
    const response = await tarefaService.create({
      titulo: "Batata",
    });

    expect(prisma.tarefa.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        titulo: "Batata",
        concluido: false,
      }),
    });

    expect(response).toEqual(dados);
  });

  it("deve retornar erro ao tentar criar tarefa", async () => {
    const tarefaVazia = {
      titulo: "",
    };
    await expect(() => tarefaService.create(tarefaVazia)).rejects.toThrow(
      "Erro ao salvar tarefa, título está vazio.",
    );
  });

  it("should be update tarefa", async () => {
    const texto = "Abacate";
    dados.id = "f031352a-58c1-4803-b5f9-2073dc40962b";
    jest.spyOn(tarefaService, "findById").mockResolvedValue(dados);
    jest.spyOn(prisma.tarefa, "update").mockResolvedValue({
      ...dados,
      titulo: texto,
    } as any);
    const tarefaAtualizada = await tarefaService.updateTask(dados.id, texto);
    expect(tarefaAtualizada.titulo).toEqual(texto);
  });

  it("should return a error update tarefa", async () => {
    const texto = "Abacate";
    dados.id = "f031352a-58c1-4803-b5f9-2073dc40962b";
    jest.spyOn(tarefaService, "findById").mockResolvedValue(null);

    await expect(tarefaService.updateTask(dados.id, texto)).rejects.toThrow(
      "Tarefa não encontrada",
    );
  });

  it("deve listar corretamente", async () => {
    jest.spyOn(prisma.tarefa, "findMany").mockResolvedValue(listaDados);

    const resultado = await tarefaService.listAllTarefas();

    expect(resultado).toEqual(listaDados);
  });

  it("deve atualizar check ", async () => {
    dados.id = "f031352a-58c1-4803-b5f9-2073dc40962b";
    jest.spyOn(tarefaService, "findById").mockResolvedValue(dados);
    const atualizandoCheck = await tarefaService.updateCheck(dados.id);

    expect(atualizandoCheck.concluido).toBe(true);
  });

  it("deve lançar erro ao tentar excluir uma tarefa inexistente", async () => {
    await expect(tarefaService.deletarTarefa("id-inexistente")).rejects.toThrow(
      "Tarefa não encontrada",
    );
  });

  it("deve excluir uma tarefa existente", async () => {
    dados.id = "123";

    jest.spyOn(tarefaService, "findById").mockResolvedValue(dados as any);

    const deleteSpy = jest
      .spyOn(prisma.tarefa, "delete")
      .mockResolvedValue(dados as any);

    await tarefaService.deletarTarefa(dados.id);

    expect(deleteSpy).toHaveBeenCalledWith({
      where: {
        id: dados.id,
      },
    });
  });
  it("deve buscar uma tarefa pelo id", async () => {
    const dados = {
      id: "f031352a-58c1-4803-b5f9-2073dc40962b",
      titulo: "Batata",
      concluido: false,
      createdAt: new Date(),
    };

    jest.spyOn(prisma.tarefa, "findUnique").mockResolvedValue(dados as any);

    const tarefa = await tarefaService.findById(dados.id);

    expect(prisma.tarefa.findUnique).toHaveBeenCalledWith({
      where: {
        id: dados.id,
      },
    });

    expect(tarefa).toEqual(dados);
  });
});
