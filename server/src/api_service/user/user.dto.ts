import type { User } from "./user.entity";
import type { UserDto } from "./user.types";

export const userDto = ({
  name,
  email,
  description,
  profileImgUrl,
}: User): UserDto => ({
  name,
  email,
  description,
  profileImgUrl,
});
