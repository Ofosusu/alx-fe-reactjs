// Footer.jsx
function Footer() {
  const footerStyle = {
    backgroundColor: '#343a40',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    position: 'relative',
    bottom: '0',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: 'auto', // Helps push the footer down if content is short
  };
  
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} My-Company. All rights reserved.</p>
      <p style={{ fontSize: '0.8em', marginTop: '5px' }}>Built with React and Vite.</p>
    </footer>
  );
}

export default Footer;  