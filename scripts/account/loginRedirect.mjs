import { NOROFF_GITHUB_BASE_URL } from "../urls/githubUrl.mjs";

export function loginRedirect() {
  const forbiddenPage = `${NOROFF_GITHUB_BASE_URL}/account/register.html`;
  const referrer = document.referrer;

  function getBaseUrl(url) {
    const a = document.createElement("a");
    a.href = url;
    return a.protocol + "//" + a.host + a.pathname;
  }

  if (getBaseUrl(referrer) !== forbiddenPage) {
    window.history.go(-1);
  } else {
    window.location.href = "../index.html";
  }
}
