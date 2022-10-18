import axios from "axios"

const axiosClient = axios.create({
    baseURL: 'https://api.imgflip.com/',
    headers: {
        'content-type': 'application/json',
    }
})

export default axiosClient;