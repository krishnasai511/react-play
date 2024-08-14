import { createContext } from "react";

export const themes = {
  colors: {
    light: "white",
    dark: "black",
  },
};

const themeContext = createContext({
  theme: {
    color: themes.colors.light,
  },
});

export default themeContext;
