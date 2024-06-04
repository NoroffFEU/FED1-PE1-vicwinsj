import { AUTH_ENDPOINT } from "../urls/apiUrl.mjs";
import { setLocalStorage } from "../utils/localStorage.mjs";
import { loginRedirect } from "./loginRedirect.mjs";
import { accountError } from "./accountError.mjs";

export async function validateLogin() {
  const login = {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value,
  };

  try {
    const response = await fetch(`${AUTH_ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const loginSuccess = response.ok;

    if (loginSuccess) {
      await setLocalStorage(response);
      loginRedirect();
    } else {
      await accountError(response);
    }
  } catch (error) {
    const errorMessage = document.getElementById("login-error");
    errorMessage.innerText = `${error.message}`;
  }
}

const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", validateLogin);
