import {INCREMENT,DECREMENT} from './action_types'
// 专门用于制造action对象
export const increment = (value)=>{
  return {type:INCREMENT,data:value}
}
export const decrement = (value)=>({type:DECREMENT,data:value})
