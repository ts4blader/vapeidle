import React from "react";
import { useSelector } from "../store";

export default function Notification() {
  const { notificationMessage } = useSelector();

  return (
    <div className="notification">
      {notificationMessage && <p>{notificationMessage}</p>}
    </div>
  );
}
