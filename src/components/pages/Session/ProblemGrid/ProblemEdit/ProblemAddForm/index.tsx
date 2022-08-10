import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, MouseEvent } from "react";
import { FormState } from "..";
import Button from "../../../../../atoms/Button";

type ProblemAddFormProps = {
  problem: FormState,
  handleSelect: (event: SelectChangeEvent) => void,
  handleChange: (prop: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function ProblemAddForm({
  problem,
  handleSelect,
  handleChange,
  handleSubmit
}: ProblemAddFormProps) {
  const valid = Boolean(problem.number) && Boolean(problem.name);

  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
        <FormControl>
          <InputLabel id="platform-select-label">플랫폼</InputLabel>
          <Select
            labelId="platform-select-label"
            id="platform-select"
            value={problem.platform}
            label="플랫폼"
            onChange={handleSelect}
            size="small"
          >
            <MenuItem value={"programmers"}>Programmers</MenuItem>
            <MenuItem value={"boj"}>백준</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="problem-number"
          label="문제 번호"
          type="number"
          value={problem.number}
          onChange={handleChange("number")}
          size="small"
        />
        <TextField
          required
          id="problem-name"
          label="문제 이름"
          value={problem.name}
          onChange={handleChange("name")}
          size="small"
        />
        <Button color="success" disabled={!valid} onClick={handleSubmit}>
          추가하기
        </Button>
      </Stack>
    </>
  );
}
