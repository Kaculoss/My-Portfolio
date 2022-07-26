import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warning("Please fill all fields");
    } else {
      emailjs
        .sendForm(
          "service_rj6uydk",
          "template_puesifb",
          form.current,
          "8q7QbqQ-vPDSu4ATz"
        )
        .then(
          (result) => {
            console.log(result.text);
            setName("");
            setEmail("");
            setMessage("");
            toast.success("Email Message Sent!");
          },
          (error) => {
            console.log(error.text);
            toast.error("Message not Sent, Please Try Again");
          }
        );
    }
  };

  return (
    <form ref={form} className="contactForm" onSubmit={sendEmail}>
      <div className="form-group">
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your message
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
