import { useEffect, useState } from "react";
import Button from "../atoms/button/button";
import Input from "../atoms/input/Input";
import Label from "../atoms/label/Label";
import theme from "@/utils/theme";

const EditModal = ({ open, texto, onClose, onSave }: any) => {
  const [novoTexto, setNovoTexto] = useState(null);
  const tam = texto.length;

  useEffect(() => {
    if (open) {
      setNovoTexto(texto);
    }
  }, [open, texto]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-md bg-black/50">
      <div
        className={`w-150 modal flex flex-col bg-black gap-5 p-7 rounded-2xl border-2 border-solid border-white/40 `}
      >
        <Label text={"Editando tarefa"} textSize={theme.font.size.xLarge} />
        <Input
          value={novoTexto}
          onChange={(event: any) => {
            setNovoTexto(event.target.value);
          }}
          width={"w-auto"}
          borderRadios={theme.border.radios.large}
          focusBorder={theme.border.color.warning}
        />

        <div className="modal-actions flex flex-row gap-3">
          <Button
            onClick={() => onSave(novoTexto)}
            radios={theme.border.radios.large}
            onHover={theme.colors.bgHover.green}
          >
            Salvar
          </Button>
          <Button
            onClick={onClose}
            radios={theme.border.radios.large}
            onHover={theme.colors.bgHover.danger}
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
