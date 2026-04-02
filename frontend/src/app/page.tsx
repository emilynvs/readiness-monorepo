import { CriarTarefa } from "@/components/form/CriarTarefa";
import { Main } from "@/components/main/Main";

export default function Home() {
  return (
    <main>
      <h1>Minha Lista de tarefas</h1>
      <CriarTarefa />
      <hr />
      <Main />
    </main>
  );
}
