import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to work with me, feel free to reach out!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p>You can also reach me at:</p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></li>
      </ul>
    </section>
  );
};

export default Contact;