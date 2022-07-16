import { useAuth } from "../../hoc/AuthContext";

import Navbar from "./Navbar";

export default function NavbarContainer() {
  const { auth, logout } = useAuth();
  return <Navbar auth={auth} logout={logout} />;
}
