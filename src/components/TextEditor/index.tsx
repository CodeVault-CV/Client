import React, { useState } from "react";
import TextEditor from "./TextEditor";

interface TextEditorContainerProps {
    preview: boolean;
}

export default function TextEditorContainer({ preview }: TextEditorContainerProps) {
    const [text, setText] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    return (
        <TextEditor 
            text={text} 
            handleChange={handleChange} 
            preview={preview} 
        />
    )
}