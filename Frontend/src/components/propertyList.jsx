import { useEffect, useState } from 'react'
import { getCategories } from '../services/property'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Property from './property'

function PropertyList() {
  const [categories, setCategories] = useState([])

  const loadCategories = async () => {
    try {
      const result = await getCategories();
      if (result['status'] === 'success') {
        setCategories(result['data']);
      } else {
        toast.error(result['error']);
      }
    } catch (error) {
      toast.error('Failed to load categories');
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <div>
      {categories.map((category) => {
        return <Property category={category} />
      })}
    </div>
  )
}

export default PropertyList
