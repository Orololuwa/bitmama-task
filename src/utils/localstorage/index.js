class LocalStorage {
  static get = (key) => {
    if (typeof window !== "undefined")
      return JSON.parse(localStorage.getItem(key));
  };

  static set = (key, value) => {
    if (typeof window !== "undefined")
      localStorage.setItem(key, JSON.stringify(value));
  };

  static remove = (key) => {
    if (typeof window !== "undefined") window.localStorage.removeItem(key);
  };
}

export default LocalStorage;
