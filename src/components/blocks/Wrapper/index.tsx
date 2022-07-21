import { Card, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Wrapper({ children, ...sxProps }: PropsWithChildren<SxProps>) {
  return (
    <Card
      sx={{
        p: 3,
        border: 1,
        borderRadius: 1,
        borderColor: "divider",
        boxShadow: 0,
        ...sxProps
      }}
    >
      {children}
    </Card>
  );
}
