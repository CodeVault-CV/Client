import { Box, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: 400,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Solve Problems
          <br />
          Solve it together
        </Typography>
        <Box mt={2}>
          <Typography variant="h6" fontWeight="bold">
            혼자하면 외롭잖아요
            <br />
            함께 문제를 풀며 성장해보세요
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
