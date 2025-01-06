import $api from "../http/secondApi";
export default class StoryService {

  static async createOrg(avatar, name, type, address, tools) {
    return $api.post("/org", { avatar, name, type, address, tools });
  }
  static async userRegister() {
    return $api.post("/users/register");
  }
  
}
