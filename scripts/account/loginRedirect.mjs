export function loginRedirect() {
  const forbiddenPage = "http://127.0.0.1:5500/account/register.html";
  const referrer = document.referrer;

  if (referrer !== forbiddenPage) {
    window.history.go(-1);
  } else {
    window.location.href = "/index.html";
  }
}
