const Label = ({ textColor, textSize, text }: any) => {
  return <p className={`${textColor} ${textSize}`}>{text}</p>;
};

export default Label;
