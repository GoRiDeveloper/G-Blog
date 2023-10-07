import type { Email } from "@/types";

export const userEmptyState = {
  token: "",
  user: {
    name: "",
    email: "" as Email,
    description: "",
    profileImgUrl: "",
  },
};
