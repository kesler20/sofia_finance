import { useState, useEffect } from "react";

export const getResourceFromCache = <T>(key: string): T | undefined => {
  try {
    const s = localStorage.getItem(key);
    if (s === undefined || s === null) {
      return undefined;
    } else {
      return JSON.parse(s) as T;
    }
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage`, error);
    return undefined;
  }
};

export const createResourceInCache = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting item ${key} in localStorage`, error);
  }
};

/**
 * custom hook to store values which persist in storage and the state of the context
 * @param {*} defaultValue
 * @param {*} key
 * @returns
 */
export const useStoredValue = <T>(
  defaultValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    const storedState = getResourceFromCache(key);
    console.log(
      `global state - ${key}`,
      storedState === undefined ? defaultValue : (storedState as T)
    );
    return storedState === undefined ? defaultValue : (storedState as T);
  });
  useEffect(() => {
    createResourceInCache(key, value);
  }, [key, value]);
  return [value as T, setValue];
};

