import useView from "../../hooks/useView";
import TextEditor from "./TextEditor";

export default function TextEditorContainer() {
    const { view, changeView }  = useView("edit");

    return (
        <TextEditor view={view} handleChange={changeView}/>
    )
}