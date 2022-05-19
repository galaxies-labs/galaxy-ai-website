import axios from "axios"

export default axios.create({
  baseURL: process.env.REACT_APP_AIAPI_BASE_URL,
})
