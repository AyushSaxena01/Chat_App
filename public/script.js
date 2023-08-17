const socket = io();
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    socket.emit('chatMessage', message);
    messageInput.value = '';
  }
});

socket.on('chatMessage', (message) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'incoming');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
});
