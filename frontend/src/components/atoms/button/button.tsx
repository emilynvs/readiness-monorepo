const Button = ({
  label,
  backgroundColor,
  onClick,
  onHover,
  radios,
  textSize,
  textHover,
  children,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${onHover} ${textHover} ${radios} p-1 px-2 border-2 border-white 
      cursor-pointer duration-500 ease-in-out ${textSize} ${textHover} flex items-center flex-row gap-1`}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
