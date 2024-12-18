import "./Contact.scss"

import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="page">
      <h1 className="greeting">Say hello!</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
