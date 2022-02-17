import { useEffect, useState } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};

export const useGetProducts = () => {
  const [hasError, setErrors] = useState(false);
  const [products, setProducts] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setProducts(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });
  if (hasError) {
    return JSON.stringify(hasError);
  }
  return JSON.stringify(products);
}

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  }

  return [storedValue, setValue];
}