import { registerUser } from "./register.mjs";
import { validateLogin } from "./login.mjs";
import { logout } from "./logout.mjs";

async function account() {
  await registerUser();
  await validateLogin();
  logout();
}

account();
