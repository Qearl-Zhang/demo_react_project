// 引入createStore,用于创建redux最核心的store
import {createStore} from 'redux'
// 引入reducer,用于真正操作状态
import reducer from './reducer'

// 暴露store
/* let store = createStore(reducer)
export default store */
export default createStore(reducer)

