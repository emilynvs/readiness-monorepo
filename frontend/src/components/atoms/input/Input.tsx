const Input = ({
  placeholder,
  backgroundColor,
  borderColor,
  borderRadios,
  width,
  value,
  onChange,
}: any) => {
  return (
    <input
      placeholder={placeholder}
      className={`border-2 ${borderColor} ${borderRadios} p-1 ${width}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
