export const getKeyFromLocalStorage = (key: string) =>
  localStorage.getItem(key);

export const setKeyFromLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const removeKeyFromLocalStorage = (key: string) =>
  localStorage.removeItem(key);

export const clearLocalStorage = () => localStorage.clear();
