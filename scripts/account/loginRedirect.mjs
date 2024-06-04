import { NOROFFFEU_GITHUB_BASE_URL } from "../urls/githubUrl.mjs";

export function loginRedirect() {
  const forbiddenPage = `${NOROFFFEU_GITHUB_BASE_URL}/account/register.html`;
  const referrer = document.referrer;

  if (referrer !== forbiddenPage) {
    window.history.go(-1);
  } else {
    window.location.href = "/index.html";
  }
}
