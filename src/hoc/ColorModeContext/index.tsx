import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import Theme, { Mode } from "./Theme";

const ColorModeContext = createContext({ toggleColorMode: () => {} });
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FCFCFC",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#303030",
      paper: "#303030",
    },
  },
});

export function ColorModeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState(Theme.getMode());

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode(Theme.toggleMode()),
    }),
    []
  );

  const theme = mode === Mode.LIGHT ? lightTheme : darkTheme;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const colorMode = useContext(ColorModeContext);
  if (!colorMode) {
    throw new Error("Cannot find ColorModeProvider");
  }
  return colorMode;
}
