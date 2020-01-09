// 引入createStore,用于创建redux最核心的store
// 引入applyMiddleware
import {createStore,applyMiddleware} from 'redux'
// 引入reducer,用于真正操作状态
import reducer from './reducer'
// 引入redux-thunk,用于处理异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension,用于支持redux的开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'


// 暴露store
/* let store = createStore(reducer)
export default store */
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
