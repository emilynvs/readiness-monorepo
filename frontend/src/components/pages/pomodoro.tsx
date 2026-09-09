"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Label from "../atoms/label/Label";
import theme from "@/utils/theme";

export default function Pomodoro() {
  const router = useRouter();

  const pararEVoltar = () => {
    setAtivo(false);
    router.push("/");
  };

  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    let intervalo: any = null;

    if (ativo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [ativo]);

  const formatarTempo = () => {
    const minutos = Math.floor(segundos / 60);

    const restoSegundos = segundos % 60;

    return `${minutos.toString().padStart(2, "0")}:${restoSegundos.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-9 border-4 border-green-500 h-screen">
      <Label text={"Intensivo"} textSize={theme.font.size.xLarge} />
      <div className="text-5xl border-2 p-5 rounded-xlg">{formatarTempo()}</div>
      <div className="flex gap-5">
        <button onClick={() => setAtivo(!ativo)}>
          {ativo ? "Pausar" : "Iniciar"}
        </button>

        <button
          onClick={() => {
            setSegundos(0);
            setAtivo(false);
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
