import React from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const nameInput = React.useRef();
  const emailInput = React.useRef();
  const messageInput = React.useRef();

  const clearName = () => (nameInput.current.value = "");
  const clearEmail = () => (emailInput.current.value = "");
  const clearMessage = () => (messageInput.current.value = "");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wpfh0zg",
        "template_y9xyayb",
        e.target,
        "bvdBTrTEEiR3nwSb9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent! Thanks for reaching out!");
          clearName();
          clearEmail();
          clearMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label id="user_name">
        Name: <input type="text" name="user_name" ref={nameInput} />
      </label>
      <label id="user_email">
        Email: <input type="email" name="user_email" ref={emailInput} />
      </label>{" "}
      <label id="messageLabel">Message</label>
      <textarea name="message" id="messageInput" ref={messageInput} />
      <br />
      <input type="submit" value="Send" id="submitButton" />
    </form>
  );
};

export default ContactForm;
