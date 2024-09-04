package Airlines.AirlineTicket.Message.Models;

import Airlines.AirlineTicket.Customer.ResourceNotFoundException;
import Airlines.AirlineTicket.Message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private  MessageRepository messageRepository;

    @Override
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    public Message getMessageById(Long id) {
        Optional<Message> optionalMessage = messageRepository.findById(id);
        if (optionalMessage.isPresent()) {
            return optionalMessage.get();
        } else {
            throw new ResourceNotFoundException("Message not found with id: " + id);
        }

    }

    @Override
    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public void deleteMessage(Long id) {
     Message message = getMessageById(id);
     messageRepository.delete(message);
    }
}
