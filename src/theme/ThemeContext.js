import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "./theme.js";

const defaultContextData = {
  gray: false,
  toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectgrayMode = () => {
  const [themeState, setThemeState] = React.useState({
    gray: false,
    hasThemeMounted: false
  });
  React.useEffect(() => {
    const lsgray = localStorage.getItem("gray") === "true";
    setThemeState({
      ...themeState,
      gray: lsgray,
      hasThemeMounted: true
    });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectgrayMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const gray = !themeState.gray;
    localStorage.setItem("gray", JSON.stringify(gray));
    setThemeState({ ...themeState, gray });
  };

  const computedTheme = themeState.gray
    ? theme("gray")
    : theme("dark");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          gray: themeState.gray,
          toggle
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export { ThemeProvider, useTheme };
