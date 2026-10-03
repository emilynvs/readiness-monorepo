import theme from "@/utils/theme";

const Input = ({
  placeholder,
  backgroundColor,
  borderColor,
  borderRadios,
  width,
  value,
  onChange,
  height,
  focusBorder,
}: any) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`border-2 ${borderColor} ${borderRadios} p-2 ${width} resize-none overflow-hidden ${height} focus:${focusBorder} focus:outline-none`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
