package Airlines.AirlineTicket.Message.Models;

import Airlines.AirlineTicket.Message.Message;

import java.util.List;

public interface MessageService {
    public List<Message> getAllMessages();

    public Message getMessageById(Long id);

    public Message saveMessage(Message message);

    public void deleteMessage(Long id);
}
