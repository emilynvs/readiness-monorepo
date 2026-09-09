const Button = ({
  label,
  backgroundColor,
  onClick,
  onHover,
  radios,
  textSize,
  textHover,
  borderColor,
  children,
  padding = "p-1",
  paddingX = "px-2",
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${onHover} ${textHover} ${radios} ${padding} ${paddingX} border-2 ${borderColor}
      cursor-pointer duration-500 ease-in-out ${textSize} ${textHover} flex items-center flex-row gap-1`}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
