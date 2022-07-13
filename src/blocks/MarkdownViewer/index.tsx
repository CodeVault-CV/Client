import React from "react";
import MarkdownViewer from "./MarkdownViewer";

interface MarkdownViewerContainerProps {
  value: string;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
  preview: boolean;
}

export default function MarkdownViewerContainer({ value, handleChange, preview }: MarkdownViewerContainerProps) {
  return <MarkdownViewer value={value} handleChange={handleChange} preview={preview} />;
}
