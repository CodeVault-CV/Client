import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";

export default function ProblemAdder() {
  return (
    <Box
      autoCorrect="off"
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ width: 170 }} size="small">
          <InputLabel id="platform-select">Platform</InputLabel>
          <Select labelId="platform-select-label" id="platform-select" value="programmers" label="Platform">
            <MenuItem value="programmers">프로그래머스</MenuItem>
            <MenuItem value="baekjoon">백준</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          label="문제번호"
          type="number"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: 150 }}
        />
        <TextField
          required
          label="문제이름"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            width: 1,
            maxWidth: 250,
          }}
        />
      </Stack>
      <Button>추가</Button>
    </Box>
  );
}
