import { Box, ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import useView from "../../../../hooks/useView";
import MDEditor from "@uiw/react-md-editor";

import CodeViewer from "../../../blocks/CodeViewer";
import Wrapper from "../../../blocks/Wrapper";
import { ISolutionEntity } from "../../../../core/entities/interfaces/iSolution";

interface SolutionViewerProps {
  solution?: ISolutionEntity;
}

export default function SolutionViewer({ solution }: SolutionViewerProps) {
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
          value={solution?.code ?? ""}
          language={solution?.language ?? "cpp"}
          isMine={false}
          handleChange={(value: string) => {}}
          handleSelect={(value: string) => {}}
        />
      ) : (
        <Box px={2} pb={2}>
          <MDEditor.Markdown source={solution?.readMe} />
        </Box>
      )}
    </Wrapper>
  );
}
