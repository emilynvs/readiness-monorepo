const Label = ({ textColor, textSize, text, maxCaracteres }: any) => {
  if (maxCaracteres > 0 && text.length > maxCaracteres) {
    text = text.slice(0, maxCaracteres) + "...";
  }
  return <p className={`${textColor} ${textSize}`}>{text}</p>;
};

export default Label;
