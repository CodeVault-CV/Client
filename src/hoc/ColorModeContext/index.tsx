import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import ThemeStorage from "./ThemeStorage";

const theme = {
  light: createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#FCFCFC",
      },
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
  console.log(ThemeStorage.get());
  const [mode, setMode] = useState<"light" | "dark">(ThemeStorage.get() || "light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => {
          const nextMode = mode === "light" ? "dark" : "light";
          ThemeStorage.set(nextMode);
          return nextMode;
        });
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
  const colorMode = useContext(ColorModeContext);
  if (!colorMode) {
    throw new Error("Cannot find ColorModeProvider");
  }
  return colorMode;
}
