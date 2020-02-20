import axios from "axios"
const api = axios.create({
    baseURL: "http://175.24.22.69:8080/",
})
api.defaults.headers["Content-Type"] = "application/json;charset=UTF-8"

export {
    api
}