import { useAuthContext } from "hooks/useAuthContext";

import { LoginButton } from "components/LoginButton";
import ProfileButton from "components/ProfileButton";

import "assets/css/Header.css";

export default function Header() {
  const { auth, setAuth } = useAuthContext();
  return (
    <header>
      {auth ? <ProfileButton auth={auth} /> : <LoginButton setAuth={setAuth} />}
    </header>
  );
}
