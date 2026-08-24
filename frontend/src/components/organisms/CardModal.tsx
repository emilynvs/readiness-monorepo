import { useEffect, useState } from "react";
import Button from "../atoms/button/button";
import Input from "../atoms/input/Input";
import Label from "../atoms/label/Label";
import theme from "@/utils/theme";

const CardModal = ({
  open,
  texto,
  onClose,
  onSave,
  criadoEm,
  descricao,
}: any) => {
  const [novoTexto, setNovoTexto] = useState(null);
  const [novaDescricao, setNovaDescricao] = useState(null);

  const tam = texto.length;
  const formatted = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date("2026-08-24T00:36:34.668Z"));
  useEffect(() => {
    if (open) {
      setNovoTexto(texto);
      setNovaDescricao(descricao);
    }
  }, [open, texto, descricao]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/50">
      <div
        className={`w-160 modal h-100 flex flex-col bg-black gap-5 p-7 rounded-2xl border-2 border-solid border-white/40 `}
      >
        {" "}
        <div>
          <Label text={"Editando tarefa"} textSize={theme.font.size.xLarge} />

          <Label text={formatted} />
        </div>
        <div>
          <Label text={"Título"} />
          <Input
            value={novoTexto}
            onChange={(event: any) => {
              setNovoTexto(event.target.value);
            }}
            width={"w-full"}
            borderRadios={theme.border.radios.large}
            focusBorder={theme.border.color.warning}
            height={"h-10"}
          />
        </div>
        <div>
          <Label text={"Descrição"} />
          <Input
            value={novaDescricao}
            onChange={(event: any) => {
              setNovaDescricao(event.target.value);
            }}
            width={"w-full"}
            borderRadios={theme.border.radios.large}
            focusBorder={theme.border.color.warning}
            height={"h-25"}
          />
        </div>
        <div className="modal-actions flex flex-row gap-3 justify-end">
          <Button
            onClick={onClose}
            radios={theme.border.radios.large}
            onHover={theme.colors.bgHover.danger}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => onSave(novoTexto, novaDescricao)}
            radios={theme.border.radios.large}
            onHover={theme.colors.bgHover.green}
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
