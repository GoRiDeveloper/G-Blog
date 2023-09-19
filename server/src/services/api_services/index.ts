import { UserService, PostService, PostImgService } from "../index";
import {
  userRepository,
  postRepository,
  postImgRepository,
} from "../../repositories";

export let userService: UserService,
  postService: PostService,
  postImgService: PostImgService;

(() => {
  userService = new UserService(userRepository);
  postService = new PostService(postRepository);
  postImgService = new PostImgService(postImgRepository);
})();
