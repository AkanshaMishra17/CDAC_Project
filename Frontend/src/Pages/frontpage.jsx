import React from 'react';
import ReactDOM from 'react-dom';
import Register_page from './../assets/Register_page.png';

// Define the FrontPage component
const FrontPage = () => {
  return (
    <div 
    style={{
      backgroundImage: `url(${Register_page})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={styles.container}>
      <h1 style={{
                        fontSize: '4rem',
                        fontWeight: '700',
                        color: '#D43F4F', 
                        background: 'linear-gradient(to right, #FF5F6D, #FFC371)', 
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        padding: '20px',
                        borderRadius: '10px',
                        display: 'inline-block',
                    }}>Welcome to Pearl Restaurant</h1>
      <h2 style={styles.subheading}>Your food experience starts here</h2>
      {/* Optional image */}
      {/* <img
        src="https://via.placeholder.com/600x400.png?text=Restaurant+Image"
        alt="Restaurant"
        style={styles.image}
      /> */}
      <div style={styles.buttonContainer}>
        <a href="/login" style={{ ...styles.button, ...styles.buttonLogin }}>Login</a>
        <a href="/register" style={{ ...styles.button, ...styles.buttonRegister }}>Register </a>
      </div>
    </div>
    </div>
  );
};

// Define styles as a JavaScript object
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    color: '#333',
    padding: '50px',
   // background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '5rem', // Increased font size
    fontWeight: 'bold',
    color: '#fff',
    margin: '0',
    textShadow: '4px 4px 8px rgba(0,0,0,0.5)', // Enhanced text shadow
    letterSpacing: '2px', // Added letter spacing
  },
  subheading: {
    fontSize: '2.5rem', // Increased font size
    color: '#fff',
    margin: '15px 0 40px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Enhanced text shadow
    letterSpacing: '1.5px', // Added letter spacing
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexDirection: 'row',
  },
  button: {
    display: 'inline-block',
    padding: '18px 36px', // Increased padding
    fontSize: '1.4rem', // Increased font size
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '30px',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)', // Enhanced shadow
  },
  buttonLogin: {
    backgroundColor: '#ff6f61',
  },
  buttonRegister: {
    backgroundColor: '#ffcc56',
  },
  buttonHover: {
    ':hover': {
      backgroundColor: '#d46a6a',
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.4)', // Enhanced shadow on hover
    },
  },
};

// Render the FrontPage component
ReactDOM.render(
  <React.StrictMode>
    <FrontPage />
  </React.StrictMode>,
  document.getElementById('root')
);


export default FrontPage;