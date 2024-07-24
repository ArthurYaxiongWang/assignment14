import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="section">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to work with me, feel free to reach out!</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
