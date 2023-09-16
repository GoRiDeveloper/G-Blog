import { UserService } from "../api_service/user/user.service";
import { userRepository } from "../repositories";

export let userService: UserService;

(() => {
  userService = new UserService(userRepository);
})();
