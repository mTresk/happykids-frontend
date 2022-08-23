import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT

export default axios
