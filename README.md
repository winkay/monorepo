# MonoRepo 项目实践

项目实现了多个独立子应用管理，其中 host 为主应用，可挂载 A、B 两个应用或者仅挂载其中一个，其中 A、B 两个子应用负责各自的独立业务。

该项目可实现同技术栈下的跨团队协同开发，是一种更轻量、更简便的微前端方案。

```
monoRepo
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ packages   // 公共资源包
│  ├─ router  // 路由处理
│  └─ auth    // 全局状态管理
└─ apps
   ├─ host   // 主应用，负责整体布局框架、路由注册等
   ├─ app-b  // 子应用 B，独立业务代码
   └─ app-a  // 子应用 A，独立业务代码

```
