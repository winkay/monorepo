let _router = null

/**
 * 由 host 注入真正的 router
 */
export function setRouter(router) {
  _router = router
}

/**
 * 子应用调用的统一跳转方法
 */
export function navigate(path) {
  console.log(_router.getRoutes())
  if (!_router) {
    console.warn('[router] router is not initialized')
    return
  }

  _router.push(path)
}
