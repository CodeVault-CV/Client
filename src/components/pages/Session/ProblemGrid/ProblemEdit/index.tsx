import { Box, Grid, SelectChangeEvent } from "@mui/material";
import { useState, ChangeEvent, MouseEvent } from "react";
import useProblemEdit from "../../../../../hooks/Problem/useProblemEdit";

import Problem from "../../../../../core/types/Problem";
import Button from "../../../../atoms/Button";
import Loading from "../../../../blocks/Loading";
import ProblemAddForm from "./ProblemAddForm";
import ProblemEditCard from "./ProblemEditCard";

type ProblemEditProps = {
  sessionId: number;
  problemList: Problem[];
  toggleMode: () => void;
};

export interface FormState {
  platform: string;
  number: string;
  name: string;
}

export default function ProblemEdit({ sessionId, problemList, toggleMode }: ProblemEditProps) {
  const { isLoading, edit } = useProblemEdit(sessionId, problemList, () => toggleMode());
  const [problems, setProblems] = useState(
    problemList.map((problem) => ({ ...problem, isNew: false }))
  );
  const [problem, setProblem] = useState<FormState>({
    platform: "programmers",
    number: "",
    name: "",
  });

  const handleChange = (prop: keyof FormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setProblem((prev) => ({ ...prev, [prop]: event.target.value }));
  };

  const handleSelect = (event: SelectChangeEvent) => {
    setProblem((prev) => ({ ...prev, platform: event.target.value }));
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    const pid = Number(`${new Date().getTime()}${problem.number}`);
    setProblems((prev) => [{ id: pid, ...problem, isNew: true }, ...prev]);
    setProblem({
      platform: "programmers",
      number: "",
      name: "",
    });
  };

  const handleDelete = (pid: number) => (event: MouseEvent<HTMLButtonElement>) => {
    setProblems((prev) => prev.filter(({ id }) => id !== pid));
  };

  const handleCommit = (event: MouseEvent<HTMLButtonElement>) => {
    edit(problems);
  };

  return (
    <>
      <Grid item xs={12}>
        <ProblemAddForm
          problem={problem}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
        />
      </Grid>
      {problems.map((problem) => (
        <ProblemEditCard key={problem.id} {...problem} onClick={handleDelete(problem.id)} />
      ))}
      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{ mx: 1 }} onClick={handleCommit}>
            적용하기
          </Button>
          <Button sx={{ mx: 1 }} onClick={toggleMode}>
            취소하기
          </Button>
        </Box>
      </Grid>
      {isLoading && <Loading />}
    </>
  );
}