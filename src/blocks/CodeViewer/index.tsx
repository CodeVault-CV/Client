import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { StreamParser } from "@codemirror/language";
import { cpp, java, kotlin } from "@codemirror/legacy-modes/mode/clike";
import { javascript, typescript } from "@codemirror/legacy-modes/mode/javascript";
import { python } from "@codemirror/legacy-modes/mode/python";
import { swift } from "@codemirror/legacy-modes/mode/swift";

import CodeViewer from "./CodeViewer";

interface CodeViewerContainerProps {
  value: string;
  handleChange(value: string): void;
}

export default function CodeViewerContainer({ value, handleChange }: CodeViewerContainerProps) {
  const [language, setLanguage] = useState("cpp");
  const [codeParser, setCodeParser] = useState(cpp);

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

  const handleSelectChange = (event: SelectChangeEvent) => {
    const selected: string = event.target.value;
    setLanguage(selected);
    setCodeParser(getCodeParser(selected));
  };

  return (
    <CodeViewer
      value={value}
      handleChange={handleChange}
      codeParser={codeParser}
      language={language}
      handleSelectChange={handleSelectChange}
    />
  );
}
