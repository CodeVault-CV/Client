import { Avatar, ButtonProps } from "@mui/material";
import Button from "../../atoms/Button";

interface ProfileProps {
  name: string;
  imageUrl?: string;
  disabled?: boolean;
  href?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Profile({
  name,
  imageUrl,
  disabled,
  ...buttonProps
}: ProfileProps & ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={disabled}
      {...buttonProps}
      sx={{
        p: 0.5,
        borderRadius: "50%",
        boxShadow: 0,
        ":hover": {
          boxShadow: 0,
        },
      }}
    >
      <Avatar
        src={imageUrl}
        sx={{
          width: 60,
          height: 60,
          img: {
            filter: `grayscale(${disabled ? "80%" : "0"})`,
          },
        }}
      >
        {name.slice(0, 2)}
      </Avatar>
    </Button>
  );
}
