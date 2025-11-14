// Services.jsx
function Services() {
  const serviceStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
  };

  const listItemStyle = {
    marginBottom: '10px',
    fontSize: '1.1em',
    color: '#333',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff3cd', minHeight: '80vh' }}>
      <h1 style={{ color: '#ffc107' }}>Our Services</h1>
      <ul style={serviceStyle}>
        <li style={listItemStyle}>**Technology Consulting**: Cutting-edge IT strategies.</li>
        <li style={listItemStyle}>**Market Analysis**: Data-driven insights for growth.</li>
        <li style={listItemStyle}>**Product Development**: Full-cycle design and implementation.</li>
        <li style={listItemStyle}>**Financial Auditing**: Ensuring transparency and compliance.</li>
      </ul>
    </div>
  );
}

export default Services;