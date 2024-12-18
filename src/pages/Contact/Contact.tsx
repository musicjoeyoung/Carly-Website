import "./Contact.scss"

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Contact = () => {
  return (
    <div className="App">
      <div id="canvas">
        <Header />
        <section id="page">
          <div>
            <div className="greeting">Say hello!</div>
          </div>
        </section>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
