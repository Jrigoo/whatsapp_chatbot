import whatsappService from "./whatsappService.js";

class MessageHandler {
  async handleIncomingMessage(message) {
    if (message?.type === "text") {
      const response = `Hola Juan! en que puedo ayudarte?`;
      await whatsappService.sendMessage(message.from, response, message.id);
      await whatsappService.markAsRead(message.id);
    }
  }
}

export default new MessageHandler();
