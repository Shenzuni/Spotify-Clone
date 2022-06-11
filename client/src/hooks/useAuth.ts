import { useEffect } from "react";

import { requestAuthorization } from "api/requestAuthorization";

export default function useAuth() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    const parent = window.opener;

    if (code && parent) {
      requestAuthorization(code).then(({ access_token }) => {
        window.opener.setAuth(access_token);
        window.close();
      });
    }
  }, []);
}
