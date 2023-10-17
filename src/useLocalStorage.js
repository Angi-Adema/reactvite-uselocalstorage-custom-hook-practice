import { useState, useEffect } from "react";

export function useLocalStorage() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
  }, [firstName]);
}
