import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.0.102:11337',
  // baseURL: 'http://192.168.210.79:11337',
})
