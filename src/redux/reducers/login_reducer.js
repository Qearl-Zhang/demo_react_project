import { SAVE_USERINFO, DELETE_USERINFO } from "../action_types";

// 从localStorage里取出之前保存的用户信息(有可能读不到,如果读到了,就给redux初始化用)
let _user = localStorage.getItem(JSON.parse("user"));
let _token = localStorage.getItem("token");
let initState = {
  // 根据API文档中的返回示例,确认下方内容的数据格式
  user: _user || {},
  token: _token || "",
  isLogin: _user && _token ? true : false
};
export default function(preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case SAVE_USERINFO:
      // 不清楚数据结构,newState不确定时,先标记上"TODO",不写会报错
      newState = { user: data.user, token: data.token, isLogin: true };
      return newState;
    case DELETE_USERINFO:
      newState = { user: {}, token: '', isLogin: false };
      return newState;
    default:
      return preState;
  }
}
