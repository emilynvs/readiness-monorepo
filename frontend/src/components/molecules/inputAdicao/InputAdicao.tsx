import Button from "@/components/atoms/button/button";
import Input from "@/components/atoms/input/Input";
import Label from "@/components/atoms/label/Label";
import theme from "@/utils/theme";

const InputAdicao = ({ value, onChange, onClick }: any) => {
  return (
    <div className="flex d-flex justify-center  flex-col items-center gap-5 m-5">
      <Label
        text={"Vamos planejar o novo dia?"}
        textSize={theme.font.size.large}
      />
      <div className="flex gap-4">
        <Input
          placeholder={"Qual sua nova tarefa?"}
          borderColor={theme.border.color.white}
          borderRadios={theme.border.radios.xLarge}
          width={theme.border.width.large}
          value={value}
          onChange={onChange}
        />
        <Button
          label={"Adicionar"}
          radios={theme.border.radios.xLarge}
          textSize={theme.font.size.medium}
          onHover={theme.colors.bgHover.gray}
          textHover={theme.font.hoverText.black}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default InputAdicao;
