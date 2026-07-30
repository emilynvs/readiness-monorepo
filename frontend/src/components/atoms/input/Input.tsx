const Input = ({
  placeholder,
  backgroundColor,
  borderColor,
  borderRadios,
  width,
}: any) => {
  return (
    <input
      placeholder={placeholder}
      className={`border-2 ${borderColor} ${borderRadios} p-1 ${width}`}
    />
  );
};

export default Input;
