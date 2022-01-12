import React, { useEffect } from "react";
import { useAuth } from "../store/useAuth";
import { useHistory } from "react-router-dom";

export default function RouteProtector({
  children,
  redirect,
  message,
  process,
}) {
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (user && process) {
      history.push(process);
      alert(message);
    }
    if (!user && redirect) {
      history.push(redirect);
      alert(message);
    }
  }, []);

  return <>{children}</>;
}
