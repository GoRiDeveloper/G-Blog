import type { User } from "./user.entity";

export const userDto = ({
  name,
  email,
  description,
  profileImgUrl,
  role,
}: User) => {
  return {
    name,
    email,
    description,
    profileImgUrl,
    role,
  };
};
