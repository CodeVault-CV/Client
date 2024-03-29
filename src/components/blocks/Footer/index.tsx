import { Box, Container, Divider, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, color: "text.disabled", my: 5 }}>
      <Container maxWidth="md">
        <Typography variant="body2" textAlign="center">
          ©{new Date().getFullYear()} by{" "}
          <Link href="https://github.com/AL-GONG" color="inherit">
            ALGONG
          </Link>
          . All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={1}>
            <Typography variant="caption" fontSize={9}>
              <Link href="https://github.com/choi-jaewon" color="inherit">
                choi-jaewon
              </Link>
            </Typography>
            <Typography variant="caption" fontSize={9}>
              <Link href="https://github.com/Johoseong" color="inherit">
                Johoseong
              </Link>
            </Typography>
            <Typography variant="caption" fontSize={9}>
              <Link href="https://github.com/KingDonggyu" color="inherit">
                KingDonggyu
              </Link>
            </Typography>
            <Typography variant="caption" fontSize={9}>
              <Link href="https://github.com/woong-jae" color="inherit">
                woong-jae
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
