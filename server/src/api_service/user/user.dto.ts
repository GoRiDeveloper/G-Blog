import type { User } from "./user.entity";
import type { UserDto } from "./user.types";

export const userDto = ({
  name,
  email,
  description,
  profileImgUrl,
}: User): UserDto => {
  return {
    name,
    email,
    description,
    profileImgUrl,
  };
};
