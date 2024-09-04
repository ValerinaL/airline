package Airlines.AirlineTicket.Message.Models;

import Airlines.AirlineTicket.Message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping
    public List<Message> getAllMessages() {
        return messageService.getAllMessages();
    }

    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable Long id) {
        return messageService.getMessageById(id);
    }

    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        return messageService.saveMessage(message);
    }

    @PutMapping("/{id}")
    public Message updateMessage(@PathVariable Long id, @RequestBody Message messageDetails) {
        Message message = messageService.getMessageById(id);
        if (message != null) {
            message.setSender(messageDetails.getSender());
            message.setRecipient(messageDetails.getRecipient());
            message.setContent(messageDetails.getContent());
            message.setTimestamp(messageDetails.getTimestamp());
            return messageService.saveMessage(message);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable Long id) {
        messageService.deleteMessage(id);
    }
}