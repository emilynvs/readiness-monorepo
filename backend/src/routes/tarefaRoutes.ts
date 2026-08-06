import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tarefas
 *   description: Gerenciamento de tarefas
 */

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Lista todas as tarefas
 *     tags: [Tarefas]
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", tarefaController.getAll);

/**
 * @swagger
 * /tarefas/criar:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tarefas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Estudar Swagger
 *               descricao:
 *                 type: string
 *                 example: Aprender documentação de API
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 */
router.post("/criar", tarefaController.create);

/**
 * @swagger
 * /tarefas/atualizarCheck/{id}:
 *   put:
 *     summary: Atualiza o status da tarefa
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Status atualizado com sucesso
 */
router.put("/atualizarCheck/:id", tarefaController.updateCheck);

/**
 * @swagger
 * /tarefas/atualizarTarefa/{id}:
 *   put:
 *     summary: Atualiza uma tarefa
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *          type: string
 *          format: uuid
 *         example: f031352a-58c1-4803-b5f9-2073dc40962b
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Estudar
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */
router.put("/atualizarTarefa/:id", tarefaController.updateTask);

/**
 * @swagger
 * /tarefas/deletarTarefa/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Tarefa deletada com sucesso
 */
router.delete("/deletarTarefa/:id", tarefaController.deletarTarefa);

export default router;
