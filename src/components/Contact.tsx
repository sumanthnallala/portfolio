import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";
import { EMAILJS } from "../constants/Constants";
import { message } from "antd";

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
    status: false,
  });

  useEffect(() => {
    if (formData.status) {
      setFormData({
        senderName: "",
        senderEmail: "",
        subject: "",
        message: "",
        status: false,
      });
    }
  }, [formData.status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const emailParams = {
      subject: formData.subject,
      message: formData.message,
      sender_name: formData.senderName,
      sender_email: formData.senderEmail,
      receiver_name: "Sumanth Reddy Nallala",
    };

    emailjs
      .send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        emailParams,
        EMAILJS.PUBLIC_KEY
      )
      .then(
        (response) => {
          message.success("Email sent successfully.");
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ ...formData, status: true });
        },
        (error) => {
          message.error("Failed to send email.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="contact-content-container">
      <h2>Contact</h2>
      <p>Feel free to reach out to me!</p>
      <form className="form-container" onSubmit={sendEmail}>
        <input
          className="input-container"
          type="text"
          name="senderName"
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.senderName}
          required
        />
        <input
          className="input-container"
          type="email"
          name="senderEmail"
          placeholder="Your Email"
          onChange={handleChange}
          value={formData.senderEmail}
          required
        />
        <input
          className="input-container"
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={formData.subject}
          required
        />
        <textarea
          className="textarea-container"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
          required
        />
        <button className="send-button-container" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
