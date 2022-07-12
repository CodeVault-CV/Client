import Navbar from "./Navbar";
import { AuthContext } from "../../hoc/AuthContext";
import { useContext } from "react";

export default function NavbarContainer() {
    const { auth } = useContext(AuthContext);
    return <Navbar auth={auth} />;
}