// 用于汇总reducer,最终生成一个最终的reducer
import CounterReducer from "./counter_reducer";
import PersonReducer from "./person_reducer";

// 引入组合所有的
import { combineReducers } from "redux";

export default combineReducers({
  count: CounterReducer,
  persons: PersonReducer
});

/* 
  redux中所保存的状态格式是
  {
    count:0,
    person:[{ name: "zs", age: 18 },{ name: "ls", age: 5 }]
  }
*/
