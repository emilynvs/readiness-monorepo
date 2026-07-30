const theme = {
  colors: {
    bgPrimary: {
      black: "bg-black",
      white: "bg-white",
      gray: "bg-stone-300",
    },
    bgSecondary: {
      //positive: "#4cc94c",
      positive: "bg-green-500",
      positiveHover: "hover:bg-green-500",
      //warning: "#c9c34c",
      warning: "bg-amber-300",
      warningHover: "hover:bg-amber-300",
      //danger: "#c94c4c",
      danger: "bg-red-500",
    },
    bgHover: {
      black: "hover:bg-black",
      white: "hover:bg-white",
      gray: "hover:bg-stone-300",
      //danger: "#c94c4c",
      danger: "hover:bg-red-500",
    },
  },
  font: {
    hoverText: {
      white: "hover:text-white",
      black: "hover:text-black",
      gray: "hover:text-stone-300",
    },
    size: {
      small: "text-sm",
      medium: "text-md",
      large: "text-lg",
      xLarge: "text-2xl",
    },
  },
  border: {
    radios: {
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      xLarge: "rounded-2xl",
    },
    color: {
      black: "border-black",
      white: "border-white",
      gray: "border-stone-300",
    },
    width: {
      small: "w-xs",
      medium: "w-md",
      large: "w-lg",
    },
  },
};

export default theme;
