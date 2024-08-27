import { useDispatch } from 'react-redux'
import { addToCartAction } from '../features/cartSlice'
import config from '../config'
import { useNavigate } from 'react-router-dom'


function Property({ category }) {
  const getShortDetails = () => {
    return category.details.length > 50
      ? category.details.substr(0, 50) + '...'
      : category.details
  }

  // used to update the state
  const dispatch = useDispatch()

  //const bookproperty=()=>{
  const bookItem = () => {
    dispatch(addToCartAction(category))
  }

  const navigate = useNavigate()

  //const onPropertyClick = () => {
    const onCategoryClick = () => {
    navigate(`/category-details/${category.id}`)
  }

  return (
    <div
      onClick={onCategoryClick}
      className='col-3'
      style={{ display: 'inline-block', cursor: 'pointer', padding: 10 }}
    >
      <div className='card'>
        <img
          style={{ height: 200 }}
          className='card-img-top'
          src={`${config.url}/image/${category.profileImage}`}
          alt=''
        />
        <div className='card-body'>
          <h5 className='card-title'>{category.title}</h5>
          <p className='card-text'>{getShortDetails()}</p>
          <div style={{ fontWeight: 600 }}>₹ {category.price} </div>
          <button
            onClick={bookItem}
            style={{ position: 'absolute', right: 15, bottom: 15 }}
            className='btn btn-success'
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Property
