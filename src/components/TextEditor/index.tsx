import React, { useState } from "react";
import TextEditor from "./TextEditor";

export default function TextEditorContainer() {
    const [view, setView] = useState("edit");

    const handleChange = (event: React.MouseEvent<HTMLElement>, newView: string) => {
        setView(newView);
    }

    return (
        <TextEditor view={view} handleChange={handleChange}/>
    )
}