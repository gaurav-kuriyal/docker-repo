import axios from "axios";

const api = axios.create({
    baseURL:"https://urban-guide-r499wv4x6q5w3pv74-8082.app.github.dev/students"
})

export default api;