/**
 * 调用了 useContext 的组件总会在 context 值变化时重新渲染
 */
import React, { useContext, createContext } from "react";
import Button from "../../../component/Button";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.light);

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <Button style={{ background: theme.background, color: theme.foreground }}>
      I am styles by theme context
    </Button>
  );
}
