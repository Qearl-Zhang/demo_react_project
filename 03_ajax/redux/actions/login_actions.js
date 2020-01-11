import { SAVE_USERINFO,DELETE_USERINFO } from "../action_types";

/* // 注意,小括号包裹,不然会报错--因为返回的是一个对象
export const saveUserInfo = (value)=>({
  type:SAVE_USERINFO,
  data:value
}) */

// 为了维护用户的登录状态
// 把value.user和value.token分别存储到localStorage
export const saveUserInfo = value => {
  localStorage.setItem("user", JSON.stringify(value.user));
  localStorage.setItem("token", value.token);
  return { type: SAVE_USERINFO, data: value };
}

export const deleteUserInfo = value => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return { type: DELETE_USERINFO, data: "" };
}
