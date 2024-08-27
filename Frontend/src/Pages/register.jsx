
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phoneNo: '',
        address: '',
        role: 'USER' // Default value
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate()

    const onRegister = () => {
        navigate('/login')
      }

    const validateForm = () => {
        let formErrors = {};
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        // Add more validation as needed
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8080/users/register', formData)
                .then(response => {
                    alert('Registration successful');
                    navigate('/login'); // Redirect to login on successful registration
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <Container>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formBasicPhoneNo">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword}</Form.Text>}
                </Form.Group>
                {/* <Form.Group controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select" name="role" value={formData.role} onChange={handleChange}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </Form.Control>
                </Form.Group> */}
                {/* <button onClick={onRegister} className="btn btn-success" > */}
                <Button type="submit" className="btn btn-success">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;


/*
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import registerImage from './../assets/Register_page.png';
import { Link} from 'react-router-dom'


const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phoneNo: '',
        address: '',
        role: 'USER' // Default value
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const navigate = useNavigate()
    const onCancel = () => {
        navigate('/')
      }
    const onRegister = () => {
        navigate('/login')
      }

    const validateForm = () => {
        let formErrors = {};
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        // Add more validation as needed
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8080/users/register', formData)
                .then(response => {
                    alert('Registration successful');
                    navigate('/login'); // Redirect to login on successful registration
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        
    <div 
          style ={{
            backgroundImage: `url(${registerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

                height: '950px',
                //width: '1000px',
                 display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

          }}
        >
          <br></br>
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
                }}>Register</h2>

         
                    <div className='form'>
                    <div className="mb-6">
                        <label htmlFor='firstName' style={{ fontWeight: 'bold' }}> Name:</label>
                        <input type='text' id='firstName' name='name' value={formData.name} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor='Email' style={{ fontWeight: 'bold' }}>Email:</label>
                        <input type='text' id='Email' name='email' value={formData.email} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='PhoneNumber' style={{ fontWeight: 'bold' }}>Phone Number:</label>
                        <input type='tel' id='PhoneNumber' name='phoneNo' value={formData.phoneNo} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='password' style={{ fontWeight: 'bold' }}>Password:</label>
                        <input type='password' id='password' name='password' value={formData.password} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>

                    <div className="mb-6">
                        <label htmlFor='CPassword' style={{ fontWeight: 'bold' }}>Confirm Password:</label>
                        <input type='password' id='CPassword' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>

                        <div className="mb-6">
                          Already have account?  <Link to='/login' style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}>Login Here</Link>
                          </div>
                            <button onClick={onRegister} className="btn btn-success" style={{
                        padding: '10px 15px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',}}>Register</button>

                            <button onClick={onCancel} className="btn btn-danger" style={{
                        padding: '10px 15px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',}}>cancel</button>   
                    </div>
                </div>    
            </div>

    );
};

export default Register;
*/




/*
//  import { useState } from 'react'
  import { Link, useNavigate } from 'react-router-dom'
// import { register } from '../services/user'
import registerImage from './../assets/Register_page.png';


function Register()
{

  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/')
  }

  const onRegister = () => {
    navigate('/login')
  }

    return (
        <div 
          style ={{
            backgroundImage: `url(${registerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

                height: '950px',
                //width: '1000px',
                 display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

          }}
        >
          <br></br>
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
                }}>Register</h2>

         
                
                
                    <div className='form'>
                    <div className="mb-6">
                        <label htmlFor='firstName' style={{ fontWeight: 'bold' }}>First Name:</label>
                        <input type='text' id='firstName' className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='LastName' style={{ fontWeight: 'bold' }}>Last Name:</label>
                        <input type='text' id='firstName' className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='Email' style={{ fontWeight: 'bold' }}>Email:</label>
                        <input type='text' id='firstName' className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='PhoneNumber' style={{ fontWeight: 'bold' }}>Phone Number:</label>
                        <input type='number' id='firstName' className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='password' style={{ fontWeight: 'bold' }}>Password:</label>
                        <input type='boolean' id='firstName' className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>

                    <div className="mb-6">
                        <label htmlFor='CPassword' style={{ fontWeight: 'bold' }}>Confirm Password:</label>
                        <input type='boolean' id='firstName' className='form-control' style={{
                            border: '1px solid #ced4da',
                            borderRadius: '4px',
                            padding: '10px',
                            fontSize: '16px',
                        }} />
                    </div>

                        <div className="mb-6">
                          Already have account?  <Link to='/login' style={{
                            color: '#007bff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}>Login Here</Link>
                          </div>
                            <button onClick={onRegister} className="btn btn-success" style={{
                        padding: '10px 15px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',}}>Register</button>

                            <button onClick={onCancel} className="btn btn-danger" style={{
                        padding: '10px 15px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer',}}>cancel</button>

                        
                        
                    </div>
                </div>
               
            </div>
          
        
   
    )
}

export default Register
*/
