function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "none" ? "flex" : "none";
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  const content = document.getElementById("chat-content");
  const userMessage = document.createElement("p");
  userMessage.innerHTML = `<strong>Anda:</strong> ${message}`;
  content.appendChild(userMessage);

  input.value = "";

  const botReply = document.createElement("p");
  botReply.innerHTML = `<strong>SENTRI:</strong> Pesan Anda telah diterima.`;
  content.appendChild(botReply);

  content.scrollTop = content.scrollHeight;
}
