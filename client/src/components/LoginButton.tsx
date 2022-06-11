import { useState } from "react";

import handleLogin from "handlers/handleLogin";

import "assets/css/LoginButton.css";

interface LoginButtonProps {
  setAuth: (auth: string) => void;
}

export function LoginButton({ setAuth }: LoginButtonProps) {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  return (
    <button
      className="login-button"
      onMouseDown={() => {
        const timeout = setTimeout(() => setAuth("local"), 1500);
        setTimeoutId(timeout);
      }}
      onClick={() => {
        clearTimeout(timeoutId);
        handleLogin(setAuth);
      }}
      onMouseLeave={() => clearTimeout(timeoutId)}
    >
      Login with Spotify
    </button>
  );
}
