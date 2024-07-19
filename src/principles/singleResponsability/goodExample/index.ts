import { Auth } from "./auth.class";
import { User } from "./user.class";

export const goodExample = () => {
  const user: User = new User("Good", "User", 23);
  user.getProfile();
  const auth: Auth = new Auth("goodUSer30", "30");
  auth.login("goodUSer30", "30");
  auth.logout("goodUSer30");
};
