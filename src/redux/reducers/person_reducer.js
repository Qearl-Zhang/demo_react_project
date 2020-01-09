// redux中的reducer,用于真正加工状态,获取到preState,action

import { ADDPERSON } from "../action_types";

// 什么时候调用reducer?1+n
// 1.初始化状态
// 2.随后用户分发action的时候
let initState = [
  { name: "zs", age: 18 },
  { name: "ls", age: 5 }
];
export default function(preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case ADDPERSON:
      newState = [...preState, data];
      return newState;
    default:
      return preState;
  }
}
