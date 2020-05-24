import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-20cdf.firebaseio.com/'
})

export default instance;