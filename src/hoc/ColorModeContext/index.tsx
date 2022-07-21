import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

const theme = {
  light: createTheme({
    palette: {
      mode: "light",
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#303030",
        paper: "#303030",
      },
    },
  }),
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ColorModeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const toggleColorMode = useContext(ColorModeContext);
  if (!toggleColorMode) {
    throw new Error("Cannot find ColorModeProvider");
  }
  return toggleColorMode;
}
