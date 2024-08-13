document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  // Check if cookie consent has already been given
  if (!getCookie('cookieConsent')) {
    cookieBanner.style.display = 'block';
  }

  acceptCookiesButton.addEventListener('click', () => {
    setCookie('cookieConsent', 'true', 365);
    cookieBanner.style.display = 'none';
  });
});
