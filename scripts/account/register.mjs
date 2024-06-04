import { AUTH_ENDPOINT } from "../urls/apiUrl.mjs";
import { accountError } from "./accountError.mjs";

export async function registerUser() {
  const register = {
    name: document.getElementById("register-name").value,
    email: document.getElementById("register-email").value,
    password: document.getElementById("register-password").value,
  };

  try {
    const response = await fetch(`${AUTH_ENDPOINT}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    });

    const registerSuccess = response.ok;

    if (registerSuccess) {
      window.history.go(-1);
    } else {
      await accountError(response);
    }
  } catch (error) {
    const errorMessage = document.getElementById("register-error");
    errorMessage.innerText = `${error.message}`;
  }
}

const registerButton = document.getElementById("register-button");
registerButton.addEventListener("click", registerUser);

//     const data = await response.json();
//     dataContainer.innerHTML = JSON.stringify(data, null, 2);
// } catch (error) {
//     // Display the error message in the error container
//     errorMessage.innerText = `Error: ${error.message}`;
// }
//       if
//     const registerError = document.getElementById("register-error");
//     registerError.classList.remove("hide");
//   }
// }

// {
//     "name": "GE1krtEENWo5zcY0YGiS",
//     "email": "user@example.com",
//     "bio": "string",
//     "avatar": {
//       "url": "string",
//       "alt": ""
//     },
//     "banner": {
//       "url": "string",
//       "alt": ""
//     },
//     "venueManager": true,
//     "password": "stringst"
//   }
