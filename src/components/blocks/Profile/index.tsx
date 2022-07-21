import { Tooltip, Avatar } from "@mui/material";
import Button from "../../atoms/Button";

interface ProfileProps {
  name: string;
  imageUrl?: string;
  disabled?: boolean;
}

export default function Profile({ name, imageUrl, disabled = false }: ProfileProps) {
  return (
    <Tooltip title={name} arrow>
      <span>
        <Button
          variant="contained"
          color="primary"
          disabled={disabled}
          sx={{
            p: 1,
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
      </span>
    </Tooltip>
  );
}
