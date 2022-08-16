import { Stack, Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import CodeViewer from "../../../blocks/CodeViewer";
import Button from "../../../atoms/Button";

interface SolutionFormProps {
  code: string;
  review: string;
  view: string;
  language: string;
  isMine: boolean;
  handleLanguage(language: string): void;
  handleCode(value: string): void;
  handleReview(input: string | undefined): void;
  handleView(event: React.MouseEvent<HTMLElement>, newView: string): void;
  handleSubmit(event: React.MouseEvent<HTMLElement>): void;
}

export default function SolutionForm({
  code,
  review,
  view,
  language,
  isMine,
  handleLanguage,
  handleCode,
  handleReview,
  handleView,
  handleSubmit,
}: SolutionFormProps) {
  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <ToggleButtonGroup value={view} exclusive onChange={handleView} size="small">
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
          isMine={isMine}
          language={language}
          handleChange={handleCode}
          handleSelect={handleLanguage}
        />
      ) : (
        <MDEditor height={520} value={review} fullscreen={false} onChange={handleReview} />
      )}
      <Box>
        <Button onClick={handleSubmit}>제출하기</Button>
      </Box>
    </Stack>
  );
}
