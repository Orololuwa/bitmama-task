import { adminInstance } from "./axios";
import QueryString from "qs";

class UserService {
  async getUser() {
    return new Promise((resolve, reject) => {
      adminInstance
        .get("/user")
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  async getRepos(queryParams: {
    per_page: number;
    sort: "created" | "updated" | "pushed" | "fullname";
  }) {
    const query = QueryString.stringify(queryParams);
    return new Promise((resolve, reject) => {
      adminInstance
        .get("/user/repo?" + query)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }
}

export default new UserService();
