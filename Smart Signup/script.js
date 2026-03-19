const email = document.getElementById('emailInput');
const pass = document.getElementById('passInput');
const bar = document.getElementById('strengthBar');
const text = document.getElementById('strengthText');

email.addEventListener('input', () => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  document.getElementById('emailStatus').innerText = isValid ? "" : "Invalid email format";
});

pass.addEventListener('input', () => {
  const val = pass.value;
  let score = 0;

  if (val.length > 6) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;

  if (score === 1) {
    bar.style.width = "33%";
    bar.style.backgroundColor = "#ff4d4d";
    text.innerText = "Weak";
  } else if (score === 2) {
    bar.style.width = "66%";
    bar.style.backgroundColor = "#ffa500";
    text.innerText = "Medium";
  } else if (score === 3) {
    bar.style.width = "100%";
    bar.style.backgroundColor = "#2ecc71";
    text.innerText = "Strong";
  } else {
    bar.style.width = "0%";
    text.innerText = "";
  }
});