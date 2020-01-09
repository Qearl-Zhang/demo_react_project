import {INCREMENT,DECREMENT} from '../action_types'
// 专门用于制造action对象
export const increment =value=>{return {type:INCREMENT,data:value}} //分发同步action
export const decrement = value=>({type:DECREMENT,data:value})
//分发同步action
export const incrementAsync = (value,timeout)=>{  //分发异步action
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(increment(value))  //分发同步action
    }, timeout);
  }
}
