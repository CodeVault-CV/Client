import { Button as MaterialButton, ButtonProps } from "@mui/material";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const StyledButton = styled(MaterialButton)`
  font-weight: 800;
  &.MuiButton-outlinedInherit {
    border-color: lightgray;
  }
`;

export default function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton variant="outlined" color="inherit" {...props}>
      {children}
    </StyledButton>
  );
}
