// Typing animation for the welcome message
const typingText = "🎉 Welcome to the Animated Fun Site!";
let index = 0;

function typeEffect() {
  if (index < typingText.length) {
    document.getElementById("typingText").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Theme toggle logic with localStorage
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  themeBtn.textContent = currentTheme === "dark" ? "🌙 Toggle Theme" : "🌞 Toggle Theme";
});

// Load theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.textContent = "🌙 Toggle Theme";
  }

  // Load message from localStorage
  const savedMsg = localStorage.getItem("userMessage");
  if (savedMsg) {
    document.getElementById("messagePreview").textContent = savedMsg;
  }
};

// Toggle image animation
document.getElementById("toggleImageBtn").addEventListener("click", () => {
  const img = document.getElementById("demoImage");
  img.classList.toggle("show");
});

// Save message to localStorage and update preview
document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("messageInput").value;
  if (msg.trim()) {
    localStorage.setItem("userMessage", msg);
    document.getElementById("messagePreview").textContent = msg;
    document.getElementById("messageInput").value = "";
  }
});
