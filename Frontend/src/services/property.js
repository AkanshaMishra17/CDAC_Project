import axios from 'axios'
import config from '../config'

export async function getCategories() {
  // read the token from sessionStorage
  // const token = sessionStorage.token
  // const token = sessionStorage['token']
  const token = sessionStorage.getItem('token')

  const response = await axios.get(`${config.url}/category`, {
    headers: {
      token,
    },
  })
  return response.data
}

export async function getCategoryDetails(id) {
  const token = sessionStorage.getItem('token')

  const response = await axios.get(`${config.url}/category/details/${id}`, {
    headers: {
      token,
    },
  })
  return response.data
}

export async function addCategory(
  title,
  details,
  
  
  price
) {
  // read the token from sessionStorage
  // const token = sessionStorage.token
  // const token = sessionStorage['token']
  const token = sessionStorage.getItem('token')

  const body = {
    title,
    details,
    price,
   
  }

  const response = await axios.post(`${config.url}/category`, body, {
    headers: {
      token,
    },
  })
  return response.data
}
