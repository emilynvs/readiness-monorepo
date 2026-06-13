import express, { Request, Response } from "express";
import cors from "cors";
import { prisma } from "./database/prisma";
import tarefaRoutes from "./routes/tarefaRoutes";
import { timeStamp } from "node:console";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: "UP",
      timeStamp: new Date().toISOString(),
      service: {
        database: "online",
        server: "online",
      },
    });
  } catch (error) {
    res.status(503).json({
      status: "DOWN",
      timeStamp: new Date().toISOString(),
      service: {
        database: "offline",
        server: "offline",
      },
      error: "Falha na conexão com o banco de dados",
    });
  }
});

app.use("/tarefas", tarefaRoutes);

async function iniciarServidor() {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`Servidor aitvado na porta: ${PORT}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar o servidor: ", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

iniciarServidor();
