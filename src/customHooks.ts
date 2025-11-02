import { useState, useEffect } from "react";
import axios from "axios";

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


const baseURL = "https://tsbackend-production.up.railway.app"; 

const api = axios.create({
  baseURL,
  headers: { Accept: "application/json" },
});

// Minimal helpers (optional)
const getJSON = <T = unknown>(path: string) => api.get<T>(path).then(r => r.data);
const putJSON = <T = unknown>(path: string, data: unknown) => api.put<T>(path, data).then(r => r.data);

/**
 * Server-backed state: GET `${base}/${key}` on mount, PUT on changes.
 * Example: useServerState("/cache", "monthlyBalance", initialValue)
 */
export default function useServerState<T>(base: string, key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback);

  // Load once (and when base/key changes)
  useEffect(() => {
    let alive = true;
    getJSON<T>(`${base}/${encodeURIComponent(key)}`)
      .then((v) => { if (alive && v !== undefined) setValue(v); })
      .catch(() => {/* ignore missing/404 */});
    return () => { alive = false; };
  }, [base, key]);

  // Persist on change
  useEffect(() => {
    putJSON(`${base}/${encodeURIComponent(key)}`, value).catch(() => {/* optionally toast */});
  }, [base, key, value]);

  return [value, setValue] as const;
}
