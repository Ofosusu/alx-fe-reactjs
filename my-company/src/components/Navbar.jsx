// Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#343a40',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: 'bold',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    color: '#adb5bd',
    textDecoration: 'none',
    fontSize: '1.1em',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={titleStyle}>
        My-Company
      </Link>
      <div style={linkContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;