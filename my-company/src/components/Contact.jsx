// Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple state demonstration: reset form and show an alert
    alert(`Thank you, ${formData.name}! Your message has been noted.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    display: 'block', 
    margin: '10px 0', 
    padding: '10px', 
    width: '100%', 
    maxWidth: '400px', 
    borderRadius: '5px', 
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '15px',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8d7da', minHeight: '80vh' }}>
      <h1 style={{ color: '#dc3545' }}>Contact Us</h1>
      <p style={{ marginBottom: '20px' }}>We'd love to hear from you!</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={{ ...inputStyle, resize: 'vertical' }}
          required
        />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;