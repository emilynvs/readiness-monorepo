import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController";

const router = Router();

router.get("/", tarefaController.getAll);

router.post("/criar", tarefaController.create);

export default router;
