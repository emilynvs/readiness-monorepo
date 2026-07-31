import { Main } from "@/components/commomUi/main/Main";
import { CriarTarefa } from "@/components/form/CriarTarefa";
import Card from "@/components/molecules/card/Card";
import InputAdicao from "@/components/molecules/inputAdicao/InputAdicao";

export default function Home() {
  return (
    <main className=" h-full">
      {/* <CriarTarefa />
      <Main /> */}

      <InputAdicao />
      <Card />
    </main>
  );
}
