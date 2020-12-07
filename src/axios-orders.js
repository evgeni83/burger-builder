import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://danevgen-burgerbuilder-default-rtdb.firebaseio.com/',
});

export default instance;
