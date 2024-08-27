import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar1';


function CategoryAdd() {

  const navigate = useNavigate()

    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('categoryName', categoryName);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:8080/categories/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
              }).then(response=>{alert('Category added successfully!')});
              navigate('/categories');
        } catch (error) {
            setMessage('Error adding category.');
        }
    };

    return (
      

        <div className="container mt-5">
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="categoryName">Category Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="image">Upload Image</label>
                    <input
                        type="file"
                        className="form-control-file"
                        id="image"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success mt-4">Add Category</button>
                {message && <p className="mt-3">{message}</p>}
            </form>
        </div>
    );
}

export default CategoryAdd;


/*

import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';

function CategoryAdd(){

    const navigate = useNavigate()
    const [categoryName, setCategoryName] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const onCancel = () => {
        navigate('/home')
      }
    
      const onAdd = async() => {
        try {
          // Step 1: Add a new category
          const response = await axios.post('http://localhost:8080/categories', {
            categoryName
          });
          if (image) {
            // const formData = new FormData();
            // formData.append('image', image);
            const formData = new FormData();
            formData.append('categoryName', categoryName);
            formData.append('categoryImage', image);
            
    
            // await axios.post(`http://localhost:8080/categories/images/${categoryName}`, formData, {
              await axios.post(`http://localhost:8080/categories/category_images`, formData, {

              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          }
    
          setMessage('Category added successfully!');

        navigate('/editedhome')
      }catch (error) {
        console.error('Error adding category:', error);
        setMessage('Error adding category.');
      }
    };

    return (
      <div >
        <br></br><br></br><br></br>
      <h2 className='page-title'>Category Add</h2>
<br></br>
      <div className='row '>
            <div className='col-4'></div>

            <div className='col-4'>
                <div className='form'>
                    <div className='mb-3'>
                        <lable htmlFor=''>Category Name </lable>
                        <input
                type='text'
                id='categoryName'
                className='form-control'
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
                    </div>
                   
              
                    <div className='mb-4'>
                        <lable htmlFor='categoryImage'>Category Image</lable>
                        <input type='file' id='categoryImage'
                className='form-control'
                onChange={(e) => setImage(e.target.files[0])} placeholder="Browse"/>
                    </div>
                            <br></br>                
                        <button onClick={onAdd} className="btn btn-success">Add</button>
                        <button onClick={onCancel} className="btn btn-danger ms-2">cancel</button>
                        {message && <p>{message}</p>}
                </div>
            </div>
            <div className='col-4'></div>
        </div>
      
        </div>
   
  )
}

export default CategoryAdd
*/
