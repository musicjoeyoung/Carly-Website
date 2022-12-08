import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="App">
      <div id="canvas">
        <Header />
        <section id="page">
          <div>
            <div>&nbsp;</div>
          </div>
        </section>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
