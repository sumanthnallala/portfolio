import React from "react";
import "./Projects.scss";

export function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div>
        <h3>Bookstore Application</h3>
        <div className="projects-description">
          <p>
            This project is a robust, full-stack Book Store Management System
            backend, developed using Spring Boot and Java. It is designed to
            efficiently manage book inventory, secure user access, and handle
            digital asset storage.
          </p>
          <ul>
            <li>
              <strong>Core Backend Development:</strong> Engineered a RESTful
              API backend using Spring Boot and Java, facilitating the seamless
              creation, retrieval, update, and deletion of book records.
            </li>
            <li>
              <strong>Relational Database Management:</strong> Implemented data
              persistence with MySQL, designing a structured schema for
              efficient storage and retrieval of book details, including titles,
              authors, prices, and other relevant metadata.
            </li>
            <li>
              <strong>Secure Authentication System:</strong> Integrated basic
              authentication to safeguard API endpoints, ensuring authorized
              access for administrative operations and secure data handling.
            </li>
            <li>
              <strong>Scalable Cloud Storage Integration:</strong> Leveraged
              Amazon S3 for secure, highly available, and scalable storage of
              book title cover images, optimizing content delivery and reducing
              strain on the primary database.
            </li>
            <li>
              <strong>Modular Architecture:</strong> Designed with a clear
              separation of concerns, enabling maintainability, scalability, and
              ease of future feature expansion.
            </li>
          </ul>
          <p>
            This project demonstrates proficiency in building secure,
            data-driven applications, integrating cloud services, and applying
            best practices in modern development.
          </p>
        </div>
      </div>
      <div>
        <h3>Portfolio Website</h3>
        <div className="projects-description">
          A modern portfolio website and application built using React,
          JavaScript, TypeScript, HTML, and CSS. The project includes key
          sections such as Education, Projects, and Contact, providing a
          comprehensive overview of qualifications and experience. Integrated
          GitHub and LinkedIn links allow visitors to connect easily and review
          code contributions. The interface supports both dark and light modes
          for enhanced accessibility and user preference. This application is
          designed to help users present their professional profiles
          effectively, making it suitable for use as a digital resume
        </div>
      </div>
    </div>
  );
}
