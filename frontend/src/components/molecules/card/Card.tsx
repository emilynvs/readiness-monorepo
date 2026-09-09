import Button from "@/components/atoms/button/button";
import Label from "@/components/atoms/label/Label";
import Check from "@/utils/icon/check";
import theme from "@/utils/theme";

const Card = ({
  text,
  descricao,
  id,
  onEdit,
  onDelete,
  onConcluido,
  concluido,
}: any) => {
  const changeColor = (concluido: any) => {
    return concluido
      ? "bg-green-500 text-white border-green-500 hover:bg-green-600"
      : "bg-white text-black border-white hover:bg-green-600 hover:text-white hover:border-transparent";
  };
  return (
    <div
      className="border-2 border-solid rounded-xl w-80 p-3 flex flex-col gap-2 m-5"
      key={id}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-1">
          <Button
            radios={theme.border.radios.xLarge}
            onClick={onConcluido}
            padding={"p-0"}
            paddingX={"px-1"}
            backgroundColor={changeColor(concluido)}
          >
            <Check />
          </Button>
          <Label
            textSize={theme.font.size.medium}
            text={text}
            maxCaracteres={39}
          />
        </div>
        <Label
          textSize={theme.font.size.small}
          text={descricao}
          maxCaracteres={34}
        />
      </div>

      <div className="flex flex-rol gap-3 justify-end">
        <Button
          onHover={theme.colors.bgHover.warning}
          label={"Editar"}
          onClick={onEdit}
          borderColor={theme.border.color.white}
          textHover={theme.font.hoverText.black}
          radios={theme.border.radios.large}
        />
        <Button
          onHover={theme.colors.bgHover.danger}
          label={"Deletar"}
          onClick={onDelete}
          radios={theme.border.radios.large}
        />
      </div>
    </div>
  );
};

export default Card;
