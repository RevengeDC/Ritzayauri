document.addEventListener('DOMContentLoaded', () => {
    const chatContainer = document.querySelector('.chat');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        // Mostrar el mensaje del usuario en el chat
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.textContent = messageText;
        chatContainer.appendChild(userMessageElement);

        // Simular una respuesta del chat después de 1 segundo (puedes ajustar el tiempo)
        setTimeout(() => {
            const chatResponseElement = document.createElement('div');
            chatResponseElement.classList.add('message', 'chat-response');
            chatResponseElement.textContent = '¡Gracias por tu mensaje!';
            chatContainer.appendChild(chatResponseElement);
        }, 1000);

        messageInput.value = '';
        messageInput.focus();
    }

    function handleSendMessage() {
        sendMessage();
    }

    sendButton.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    });
});
