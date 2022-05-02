import { userInstance } from "./axios";
import QueryString from "qs";

export interface RepoQParams {
  per_page: number;
  sort: "created" | "updated" | "pushed" | "fullname" | string;
}

class UserService {
  async getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      userInstance
        .get("/user")
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  async getRepos(queryParams: RepoQParams): Promise<any> {
    const query = QueryString.stringify(queryParams);
    return new Promise((resolve, reject) => {
      userInstance
        .get("/user/repos?" + query)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }
}

export default new UserService();
