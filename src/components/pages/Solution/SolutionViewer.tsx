import { Box, ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import useView from "../../../hooks/useView";
import MDEditor from "@uiw/react-md-editor";

import CodeViewer from "../../blocks/CodeViewer";
import Wrapper from "../../blocks/Wrapper";
import { useQuery } from "@tanstack/react-query";
import Solution from "../../../di/Solution";

interface SolutionProps {
  id: number;
}

export default function SolutionViewer({ id }: SolutionProps) {
  const { data } = useQuery(["solution", id], () => Solution.getSolution(id));
  const { view, changeView } = useView("code");

  return (
    <Wrapper>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <ToggleButtonGroup value={view} exclusive onChange={changeView} size="small">
          <ToggleButton value="code">
            <Typography px={1} fontWeight={800}>
              코드
            </Typography>
          </ToggleButton>
          <ToggleButton value="review">
            <Typography px={1} fontWeight={800}>
              리뷰
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {view === "code" ? (
        <CodeViewer
          value={data?.code ?? ""}
          language={data?.language ?? "cpp"}
          isMine={false}
          handleChange={(value: string) => {}}
          handleSelect={(value: string) => {}}
        />
      ) : (
        <Box px={2} pb={5}>
          <MDEditor.Markdown source={data?.readMe} />
        </Box>
      )}
    </Wrapper>
  );
}
