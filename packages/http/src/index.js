import axios from 'axios'
import { useAuthStore } from '../../auth'

export function httpRequest() {
  const instance = axios.create({
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
    (res) => res.data,
    (err) => {
      // 统一错误处理
      return Promise.reject(err)
    }
  )

  return instance
}
