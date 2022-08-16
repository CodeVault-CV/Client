import { SelectChangeEvent } from "@mui/material/Select";
import { StreamParser } from "@codemirror/language";
import { cpp, java, kotlin } from "@codemirror/legacy-modes/mode/clike";
import { javascript, typescript } from "@codemirror/legacy-modes/mode/javascript";
import { python } from "@codemirror/legacy-modes/mode/python";
import { swift } from "@codemirror/legacy-modes/mode/swift";

import CodeViewer from "./CodeViewer";

interface CodeViewerContainerProps {
  value: string;
  isMine: boolean;
  language: string;
  handleChange(value: string): void;
  handleSelect(value: string): void;
}

const getCodeParser = (language: string): StreamParser<unknown> => {
  switch (language) {
    case "cpp":
      return cpp;
    case "java":
      return java;
    case "javascript":
      return javascript;
    case "kotlin":
      return kotlin;
    case "python":
      return python;
    case "swift":
      return swift;
    case "typescript":
      return typescript;
    default:
      return cpp;
  }
};

export default function CodeViewerContainer({
  value,
  isMine,
  language,
  handleChange,
  handleSelect
}: CodeViewerContainerProps) {

  const handleSelectChange = (event: SelectChangeEvent) => {
    handleSelect(event.target.value);
  };

  return (
    <CodeViewer
      value={value}
      isMine={isMine}
      handleChange={handleChange}
      codeParser={getCodeParser(language)}
      language={language}
      handleSelectChange={handleSelectChange}
    />
  );
}
