export const createUserAdapter = (data: any) => ({
  token: data.token,
  user: {
    name: data.user.name,
    email: data.user.email,
    description: data.user.description,
    profileImgUrl: data.user?.profileImgUrl,
  },
});
