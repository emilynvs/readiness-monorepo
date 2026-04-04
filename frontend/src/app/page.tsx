import { Main } from "@/components/commomUi/main/Main";
import { CriarTarefa } from "@/components/form/CriarTarefa";

export default function Home() {
  return (
    <main>
      <CriarTarefa />
      <Main />
    </main>
  );
}
