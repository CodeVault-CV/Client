import useView from "../../hooks/useView";
import TextEditor from "./TextEditor";

interface TextEditorContainerProps {
    value: string;
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default function TextEditorContainer({ value, handleChange }: TextEditorContainerProps) {
    const { view, changeView }  = useView("edit");

    return (
        <TextEditor 
            value={value} 
            view={view} 
            handleChange={handleChange} 
            changeView={changeView}
        />
    )
}