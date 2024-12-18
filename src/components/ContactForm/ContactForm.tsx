import "./ContactForm.scss";

import emailjs from "emailjs-com";
import { useRef } from "react";

const { VITE_YOUR_SERVICE_ID, VITE_YOUR_TEMPLATE_ID } = import.meta.env;

const ContactForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const clearName = () => nameInput.current && (nameInput.current.value = "");
  const clearEmail = () => emailInput.current && (emailInput.current.value = "");
  const clearMessage = () => messageInput.current && (messageInput.current.value = "");

  interface EmailJSResponseData {
    text: string;
  }

  interface EmailJSErrorData {
    text: string;
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    emailjs
      .sendForm(
        VITE_YOUR_SERVICE_ID,
        VITE_YOUR_TEMPLATE_ID,
        e.target as HTMLFormElement,
        "bvdBTrTEEiR3nwSb9"
      )
      .then(
        (result: EmailJSResponseData) => {
          console.log(result.text);
          alert("Sent! Thanks for reaching out!");
          clearName();
          clearEmail();
          clearMessage();
        },
        (error: EmailJSErrorData) => {
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
      <textarea name="message" className="contact-form__message" id="message" ref={messageInput} />
      <br />
      <input type="submit" value="Send" className="contact-form__submit" />
    </form>
  );
};

export default ContactForm;
