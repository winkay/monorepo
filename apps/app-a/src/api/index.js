import request from '../hooks/useHttp'

export function mockTesk() {
  return request({
    method: 'get',
    url: '/typicode/demo/posts'
  })
}
