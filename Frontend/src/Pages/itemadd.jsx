import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Navbar from "../components/navbar";

function ItemAdd()

{

 
    const navigate = useNavigate()
    const location = useLocation();
    const previousPage = location.state?.from || '/';

    const onAdd = () => {
        navigate(previousPage)
      }

    const onCancel=() => {
        navigate(previousPage)
    }

    

return ( 
          <div>
            <br></br><br></br>
          <h2 className='page-title'>Item Add</h2>
<br></br>
          <div className='row '>
                <div className='col-4'></div>

                <div className='col-4'>
                    
                        <div className='mb-3'>
                            <lable htmlFor=''>Item Name </lable>
                            <input type='number' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <lable htmlFor=''>Item Price </lable>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <lable htmlFor=''>Type</lable>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <lable htmlFor=''>Descrition</lable>
                            <input type='number' className='form-control'/>
                        </div>
                        <div className='mb-3'>
                            <lable htmlFor=''>Item Image</lable>
                            <input type='file' className='form-control' placeholder="Browse"/>
                        </div>
                             <br></br>                   
                            <button onClick={onAdd} className="btn btn-success">Add</button>
                            <button onClick={onCancel} className="btn btn-danger ms-2">cancel</button>                      
                    
                </div>
                <div className='col-4'></div>
            </div>    
            </div>
    )
}

export default ItemAdd

