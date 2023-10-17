import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue == null) {
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(localValue); // Have to properly serialize the data using JSON in order to get the hobbies to render. Here, converted value from a string into an actual js object.
    }
  });

  useEffect(() => {
    if (value === undefined) {
      // Code to remove items from local storage if they are undefined.
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value)); // Here, we are just stringifying the value and setting it to local storage. (converted back into JavaScript notation when we pull it from local storage)
    }
  }, [value, key]);

  return [value, setValue];
}
