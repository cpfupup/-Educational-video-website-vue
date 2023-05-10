import { createPinia } from 'pinia'
import piniaPluginPerPersist from 'pinia-plugin-persist'


// 此处和router类似
const store = createPinia()
store.use(piniaPluginPerPersist)

export default store