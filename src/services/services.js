import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

function createHeader(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

async function login(body) {
  const loginPromise = await axios.post(`${API_URL}/auth`, body)

  return loginPromise
}

async function register(body) {
  const registerPromise = await axios.post(`${API_URL}/user`, body)

  return registerPromise
}

const services = {
  login,
  register
}

export default services;