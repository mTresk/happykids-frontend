import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
//axios.defaults.baseURL = 'http:/happykids-vue.test'

export default axios
