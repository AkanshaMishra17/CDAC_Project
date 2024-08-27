import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar1';
import { useNavigate } from 'react-router-dom';


const Category = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/categories/all')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the categories!", error);
            });
    }, []);

    const handleCategoryClick = (categoryName) => {
       
        navigate('/paneer');     
    };

    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <div className="container mt-4">
                <div className="row g-4">
                    {categories.map(category => (
                        <div className="col-md-3" key={category.id}
                        onClick={() => handleCategoryClick(category.categoryName)}
                        >
                            <div className="card h-100">
                                <img 
                                    // src={`http://localhost:8080/${category.imagePath}`} 
                                    src={`data:image/jpeg;base64,${category.image}`} 
                                    className="card-img-top" 
                                    alt={category.categoryName} 
                                    style={{ objectFit: 'cover', height: '200px' }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{category.categoryName}</h5>
                                    <p className="card-text">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Category;


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar1';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/categories/all')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the categories!", error);
                alert("Failed to load categories. Please check the server.");
            });
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <div className="container mt-4">
                <div className="row g-4">
                    {categories.map((category) => {
                        // Convert byte array to Base64 string
                        const base64Image = category.image 
                            ? btoa(new Uint8Array(category.image).reduce((data, byte) => data + String.fromCharCode(byte), ''))
                            : null;

                        return (
                            <div className="col-md-3" key={category.id}>
                                <div className="card h-100">
                                    {base64Image && (
                                        <img 
                                            src={`data:image/jpeg;base64,${base64Image}`} 
                                            className="card-img-top" 
                                            alt={category.categoryName} 
                                        />
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{category.categoryName}</h5>
                                        <p className="card-text">{category.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Category;
*/


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar1';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ categoryName: '', description: '', imagePath: '' });

    useEffect(() => {
        axios.get('http://localhost:8080/categories/all')
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    const handleChange = (e) => {
        setNewCategory({
            ...newCategory,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/categories/upload', newCategory)
            .then(response => {
                setCategories([...categories, response.data]);
            });
    };

    return (

        <React.Fragment>
                     <Navbar />
        <div>

            <div className="container mt-4">
                <div className="row g-4">
                    {categories.map(category => (
                        <div className="col-md-3" key={category.id}>
                            <div className="card h-100">
                                <img src={`http://localhost:8080/${category.imagePath}`} className="card-img-top" className="card-img-top" alt={category.categoryName} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.categoryName}</h5>
                                    <p className="card-text">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default Category;
*/
