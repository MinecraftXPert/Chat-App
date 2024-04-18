const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (message) => {
  const item = document.createElement("li");
  item.textContent = message;
  item.classList.add("p-5", "text-white", "hover:bg-slate-700", "mb-4");
  messages.appendChild(item);
  
  // Scroll the newly added message into view
  item.scrollIntoView({ behavior: "smooth", block: "end" });
});


