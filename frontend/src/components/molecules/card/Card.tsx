import Button from "@/components/atoms/button/button";
import Label from "@/components/atoms/label/Label";
import Check from "@/utils/icon/check";
import theme from "@/utils/theme";

const Card = ({ text, id, onEdit, onDelete }: any) => {
  return (
    <div className="border-2 border-solid rounded-xl w-80 p-3 flex flex-col gap-5 m-5">
      <Label
        textSize={theme.font.size.medium}
        text={text || "Sem tarefa adicionada"}
      />

      <div className="flex flex-rol gap-3 justify-end">
        <Button
          onHover={theme.colors.bgHover.warning}
          label={"Editar"}
          onClick={onEdit}
          textHover={theme.font.hoverText.black}
          radios={theme.border.radios.large}
        />
        <Button
          onHover={theme.colors.bgHover.danger}
          label={"Deletar"}
          onClick={onDelete}
          radios={theme.border.radios.large}
        />
        <Button
          radios={theme.border.radios.large}
          label={"Concluido"}
          onHover={theme.colors.bgHover.green}
        >
          <Check />
        </Button>
      </div>
    </div>
  );
};

export default Card;
