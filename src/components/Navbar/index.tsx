import { useContext } from "react";

import Navbar from "./Navbar";
import { AuthContext } from "../../hoc/AuthContext";

export default function NavbarContainer() {
  const { auth, logout } = useContext(AuthContext);
  return <Navbar auth={auth} logout={logout} />;
}
