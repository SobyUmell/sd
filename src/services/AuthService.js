import $api from "../http";
export default class AuthService {
  static async login(email, password) {
    return $api.post("/auth/sign-in", { email, password });
  }
  static async registration(email, password) {
    return $api.post("/auth/sign-up", { email, password });
  }
  static async logout() {
    return $api.post("/auth/logout");
  }
  static async checkAuth() {
    return $api.post("/auth/refresh");
  }
}
