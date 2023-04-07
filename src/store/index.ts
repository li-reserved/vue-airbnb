import { createPinia } from 'pinia'
// 自动保存本地
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
