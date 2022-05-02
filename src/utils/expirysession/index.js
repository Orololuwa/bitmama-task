import LocalStorage from "utils/localstorage";

class ExpirySession {
  static get = (key) => {
    let stringValue = LocalStorage.get(key); // get details about token.
    if (!!stringValue) {
      let value = JSON.parse(stringValue);
      let expirationDate = new Date(value.expirationDate);
      if (expirationDate > new Date()) {
        this.set("access_token", value.value);
        return value.value;
      } else {
        LocalStorage.remove(key); // remove token if expired.
      }
    }
    return null;
  };

  static set = (key, value, expirationInSeconds = 2700) => {
    let expirationDate = new Date(
      new Date().getTime() + 1000 * expirationInSeconds
    ); // create new expiring date.
    let newValue = {
      value: value,
      expirationDate: expirationDate.toISOString()
    };
    LocalStorage.set(key, JSON.stringify(newValue)); // add token to local storage.
  };

  static clear = () => {
    LocalStorage.remove("access_token");
    LocalStorage.remove("isLoggedIn");
    LocalStorage.remove("user");
  };
}

export default ExpirySession;
