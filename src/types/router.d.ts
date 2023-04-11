import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    isFixed: boolean
    apptitle: boolean
    topAlpha: boolean
  }
}
