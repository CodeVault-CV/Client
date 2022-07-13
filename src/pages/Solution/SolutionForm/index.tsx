import useView from "../../../hooks/useView";
import SolutionForm from "./SolutionForm";

export default function SolutionFormContainer() {
    const { view, changeView } = useView("code");
    
    return <SolutionForm view={view} handleChange={changeView} />
}