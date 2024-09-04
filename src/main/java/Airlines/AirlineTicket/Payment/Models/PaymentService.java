package Airlines.AirlineTicket.Payment.Models;

import Airlines.AirlineTicket.Payment.Payment;

import java.util.List;

public interface PaymentService {

    Payment savePayment(Payment payment);

    List<Payment> getAllPayments();

    Payment getPaymentById(Long id);

    Payment updatePayment(Long id, Payment paymentDetails);

    void deletePayment(Long id);
}
