import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact-content-container">
      <h1>Contact</h1>
      <h2>Feel free to reach out to me!</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <button>Send</button>
    </div>
  );
};

export default Contact;
