import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact-content-container">
      <h2>Contact</h2>
      <p>Feel free to reach out to me!</p>
      <input className="input-container" type="text" placeholder="Name" />
      <input className="input-container" type="email" placeholder="Email" />
      <input className="input-container" type="subject" placeholder="Subject" />
      <textarea className="textarea-container" placeholder="Message" />
      <button className="send-button-container">Send</button>
    </div>
  );
};

export default Contact;
