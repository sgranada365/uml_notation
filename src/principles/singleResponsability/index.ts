import { Auth } from "./auth.class";
import { BadUser } from "./user.bad.class";
import { User } from "./user.class";

function main() {
  const badUser: BadUser = new BadUser("Bad", "User", 23);
  badUser.getProfile();
  badUser.login("Bad:User:23", "23:23");
  badUser.logout("BadUser");

  console.log();
  
  const user: User = new User("Good", "User", 23);
  user.getProfile();
  const auth: Auth = new Auth("goodUSer30", "30");
  auth.login("goodUSer30", "30");
  auth.logout("goodUSer30");
}

main();
