import { useState } from "react";

const useLocalStorage = () => {
  const [value, setValue] = useState(null);

  function getItem(key) {
    const value = localStorage.getItem(key);
    setValue(value);
  }

  function setItem(key, value) {
    localStorage.setItem(key, value);
    setValue(value);
  }

  function removeItem(key) {
    localStorage.removeItem(key);
    setValue(null);
  }

  return { value, getItem, setItem, removeItem };
};

export default useLocalStorage;
