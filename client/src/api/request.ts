import axios from 'axios'

const API_ADDRESS =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:4000/api'

const instance = axios.create({
  baseURL: API_ADDRESS,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use((response) => response.data)

export default instance
