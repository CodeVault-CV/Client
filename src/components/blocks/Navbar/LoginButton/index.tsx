import { useState } from "react";
import { Button, Popover } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function LoginButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = open ? "login-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} color="inherit" size="large" sx={{ fontWeight: 800 }} onClick={handleClick}>
        로그인
      </Button>
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Button
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?scope=user,repo,delete_repo`}
          color="success"
          variant="contained"
          size="large"
          startIcon={<GitHubIcon />}
          sx={{ fontWeight: 800 }}
        >
          깃허브로 로그인
        </Button>
      </Popover>
    </>
  );
}
