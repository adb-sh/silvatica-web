const targetDate = new Date("2025-08-15T00:10:00").getTime();

function updateCountdownDigit(element, value) {
  if (!element) return;
  const text = value.toString().padStart(2, '0');
  element.textContent = text
  element.style.setProperty('--value', text);
  element.setAttribute('aria-label', text);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(distance / 1000));

  const months = Math.floor(totalSeconds / (60 * 60 * 24 * 30.44));
  const days = Math.floor((totalSeconds % (60 * 60 * 24 * 30.44)) / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  updateCountdownDigit(document.getElementById("months"), months);
  updateCountdownDigit(document.getElementById("days"), days);
  updateCountdownDigit(document.getElementById("hours"), hours);
  updateCountdownDigit(document.getElementById("minutes"), minutes);
  updateCountdownDigit(document.getElementById("seconds"), seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);