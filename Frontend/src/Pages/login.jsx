import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from './../assets/banner.jpeg';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/categories');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/users/login', credentials)
      .then(response => {
        alert('Login successful');
        navigate('/home');  // Navigate after successful login
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div 
        style={{
          backgroundImage: `url(${loginImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="login-container" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
        }}>
          <h2 className="page-title" style={{
              marginBottom: '20px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#333',
          }}>Login</h2>

          <div className="form">
            <div className="mb-3">
              <label htmlFor='email' style={{ fontWeight: 'bold' }}>Email:</label>
              <input
                type='email'
                id='email'
                name='email'  // Add name attribute
                value={credentials.email}
                onChange={handleChange}
                required
                className='form-control'
                style={{
                  border: '1px solid #ced4da',
                  borderRadius: '4px',
                  padding: '10px',
                  fontSize: '16px',
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor='password' style={{ fontWeight: 'bold' }}>Password:</label>
              <input
                type='password'
                id='password'
                name='password'  // Add name attribute
                value={credentials.password}
                onChange={handleChange}
                required
                className='form-control'
                style={{
                  border: '1px solid #ced4da',
                  borderRadius: '4px',
                  padding: '10px',
                  fontSize: '16px',
                }}
              />
            </div>

            <div className="mb-3" style={{ marginTop: '20px' }}>
              Don't have an account? <Link to='/register' style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
              }}>Register Here</Link>
            </div>
            
            <button onClick={onLogin} className="btn btn-success" style={{
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
            }}>Login</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

/*

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from './../assets/banner.jpeg'


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onLogin = () => {
    navigate('/home');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/users/login', credentials)
      .then(response => {
        alert('Login successful');
        navigate('/home');  // Navigate after successful login
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
     <form onSubmit={handleSubmit}>
        <div 
          style={{
            backgroundImage: `url(${loginImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <div className="login-container" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '40px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center',
            }}>
                <h2 className="page-title" style={{
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333',
                }}>Login</h2>

                <div className="form">
                    <div className="mb-3">
                        <label htmlFor='email' style={{ fontWeight: 'bold' }}>Email:</label>
                        <input type='email' id='email' name='email' value={credentials.email} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor='password' style={{ fontWeight: 'bold' }}>Password:</label>
                        <input type='password' id='password' name='password' value={credentials.password} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>

                    <div className="mb-3" style={{ marginTop: '20px' }}>
                        Don't have an account? <Link to='/register' style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}>Register Here</Link>
                    </div>
                    
                    <button onClick={onLogin} className="btn btn-success" style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',
                    }}>Login</button>
                </div>
            </div>
        </div>
        </form>
  );
};

export default Login;
*/


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const navigate = useNavigate();

//     const onLogin = () => {
//         navigate('/home');
//     }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8080/users/login', credentials)
//       .then(response => {
//         alert('Login successful');
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   };

//   return (
//     <Container>
//       <h2>Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="email" value={credentials.email} onChange={handleChange} required />
//         </Form.Group>
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} required />
//         </Form.Group>
//         <button onClick={onLogin} className="btn btn-success">
//           Login
//         </button>
//       </Form>
//     </Container>
//   );
// };

// export default Login;




