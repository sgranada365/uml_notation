import { BadUser } from "./user.bad.class";

export const badExample = () => {
  const badUser: BadUser = new BadUser("Bad", "User", 23);
  badUser.getProfile();
  badUser.login("Bad:User:23", "23:23");
  badUser.logout("BadUser");
};
