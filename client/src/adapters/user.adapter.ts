import { UserLogged } from "@/models";

/**
 * Returns the information when creating a new user in the application.
 * 
 * @param { UserLogged } data - Model of an authenticated user.
 * 
 * @returns Model of an authenticated user.
 */
// Adatptador para moldear la información al crear un nuevo usuario en la aplicación.
export const createUserAdapter = (data: UserLogged): any => ({
  token: data.token,
  user: {
    name: data.user.name,
    email: data.user.email,
    description: data.user.description,
    profileImgUrl: data.user?.profileImgUrl,
  },
});
