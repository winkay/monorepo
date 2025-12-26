import axios from 'axios'
import { useAuthStore } from '../../auth'

export default function httpRequest(baseURL) {
  const instance = axios.create({
    baseURL,
    timeout: 5000
  })

  instance.interceptors.request.use((config) => {
    const auth = useAuthStore()
    if (auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    }
    return config
  })

  instance.interceptors.response.use(
    (res) => {
      if (res.status === 200) {
        return res.data
      }
    },
    (err) => {
      // 统一错误处理
      return Promise.reject(err)
    }
  )

  return instance
}
