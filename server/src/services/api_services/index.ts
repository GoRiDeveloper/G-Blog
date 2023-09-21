import {
  UserService,
  PostService,
  PostImgService,
  CommentService,
} from "../index";
import {
  userRepository,
  postRepository,
  postImgRepository,
  commentRepository,
} from "../../repositories";

export let userService: UserService,
  postService: PostService,
  postImgService: PostImgService,
  commentService: CommentService;

(() => {
  userService = new UserService(userRepository);
  postService = new PostService(postRepository);
  postImgService = new PostImgService(postImgRepository);
  commentService = new CommentService(commentRepository);
})();
