import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(<App store={store} />, document.getElementById("root"));
// 注册监听,当state发生变化,自动调用
store.subscribe(() => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
});

