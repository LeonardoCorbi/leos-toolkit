// eslint-disable-next-line no-unused-vars
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type ReturnProps<T> = [T, Dispatch<SetStateAction<T>>]

const useStorage = <T>(key: string, initialValue: T): ReturnProps<T> => {
  const [state, setState] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useStorage;
