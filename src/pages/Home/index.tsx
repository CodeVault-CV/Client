import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../hoc/AuthContext";

export default function HomeContainer() {
  const navigate = useNavigate();
  const { auth, login } = useContext(AuthContext);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      login(code);
      navigate("/", { replace: true });
    }
  }, [auth, login, navigate]);

  return <div>home</div>;
}
