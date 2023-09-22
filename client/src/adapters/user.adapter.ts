export const createUserAdapter = (user: any) => ({
  token: user.token,
  user: {
    name: user.name,
    email: user.email,
    description: user.description,
    profileImgUrl: user?.profileImgUrl,
  },
});
