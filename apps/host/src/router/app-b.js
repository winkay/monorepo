let AppRoot
let routes

if (import.meta.env.DEV) {
  const mod = await import('@apps/app-b/src/main')
  AppRoot = mod.AppRoot
  routes = mod.routes
} else {
  const mod = await import('@dist/app-b/assets/index')
  AppRoot = mod.AppRoot
  routes = mod.routes
}

export { AppRoot, routes }
