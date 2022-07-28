import { PropsWithChildren } from "react";
import { Button as MaterialButton, ButtonProps, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";

const StyledButton = styled(MaterialButton)`
  padding: 0;
  font-weight: 800;
  &.MuiButton-outlinedInherit {
    border-color: lightgray;
  }
`;

type LinkButtonProps = {
  to: string;
};

export default function LinkButton({
  to,
  children,
  ...props
}: PropsWithChildren<ButtonProps> & LinkButtonProps) {
  return (
    <StyledButton variant="outlined" color="inherit" {...props}>
      <Link
        to={to}
        component={RouterLink}
        underline="none"
        color="inherit"
        sx={{ width: "100%", height: "100%", px: "15px", py: "5px" }}
      >
        {children}
      </Link>
    </StyledButton>
  );
}
