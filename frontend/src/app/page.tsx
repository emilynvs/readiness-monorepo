import { CriarTarefa } from "@/components/form/CriarTarefa";
import { Main } from "@/components/main/Main";

export default function Home() {
  return (
    <main>
      <CriarTarefa />
      <hr />
      <Main />
    </main>
  );
}
