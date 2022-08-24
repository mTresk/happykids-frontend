import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export default axios
