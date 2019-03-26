import axios from 'axios'

const KEY = 'AIzaSyA-NmIEbGHGOJh9-53fKGU9OEI7zH5ULYI'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 25,
        key: KEY
    }
})