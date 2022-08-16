import { Box, ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import useView from "../../../hooks/useView";
import MDEditor from "@uiw/react-md-editor";

import CodeViewer from "../../blocks/CodeViewer";
import Wrapper from "../../blocks/Wrapper";

interface SolutionProps {
  code: string;
  language: string;
  readMe: string;
}

export default function SolutionViewer({ code, readMe, language }: SolutionProps) {
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
          value={code}
          language={language}
          isMine={false}
          handleChange={(value: string) => {}}
          handleSelect={(value: string) => {}}
        />
      ) : (
        <MDEditor.Markdown source={readMe} />
      )}
    </Wrapper>
  );
}
