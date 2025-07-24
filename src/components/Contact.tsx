import React from "react";
import "./Contact.scss";

export function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div>
        <h3>Email </h3>
        <div className="contact-description">
          <p>
            You can reach me at{" "}
            <a href="mailto:sumanthnallala@gmail.com">sumanthnallala@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
