export async function setLocalStorage(response) {
  const data = await response.json();
  if (data.data.accessToken) {
    localStorage.setItem("accessToken", data.data.accessToken);
  }
  if (data.data.email === "vicwin52776@stud.noroff.no") {
    localStorage.setItem("isAdmin", true);
  }
}

export const accessToken = localStorage.getItem("accessToken");
export const isAdmin = localStorage.getItem("isAdmin");
