const Button = ({
  label,
  backgroundColor,
  onClick,
  onHover,
  radios,
  textSize,
  textHover,
}: any) => {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${onHover} ${textHover} ${radios} p-1 px-2 border-2 border-white cursor-pointer duration-900 ease-in-out ${textSize} ${textHover}`}
    >
      {label}
    </button>
  );
};

export default Button;
