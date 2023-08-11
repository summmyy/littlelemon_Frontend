import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8001/restaurant/booking/tables', // Change this to your Django API URL
    headers: "application/json",
});

export default instance;
