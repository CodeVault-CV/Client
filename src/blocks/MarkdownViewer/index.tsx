import React, { useState } from "react";
import MarkdownViewer from "./MarkdownViewer";

interface MarkdownViewerContainerProps {
    preview: boolean;
}

export default function MarkdownViewerContainer({ preview }: MarkdownViewerContainerProps) {
    const [text, setText] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    return (
        <MarkdownViewer 
            text={text} 
            handleChange={handleChange} 
            preview={preview} 
        />
    )
}