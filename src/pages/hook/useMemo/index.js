/**
 * 调用了 useContext 的组件总会在 context 值变化时重新渲染
 */
import React, { useContext, createContext } from "react";


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
    <Button
      privateStyle={{
        background: theme.background,
        color: theme.foreground,
        width: "auto",
        padding: "3px"
      }}
    >
      I am styles by theme context
    </Button>
  );
}
