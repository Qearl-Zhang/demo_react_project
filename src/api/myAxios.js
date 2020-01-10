import axios from "axios";
import {message} from 'antd';
import Nprogress from 'nprogress'
import {BASE_URL} from '../config'
import qs from "querystring";
// 引入nprogress样式
import 'nprogress/nprogress.css'

axios.defaults.baseURL = BASE_URL

// 请求拦截器
axios.interceptors.request.use(config => {
  Nprogress.start()
  console.log("请求拦截器", config);
  let { method, data } = config;
  // 统一处理所有post请求携带参数的问题
  if (method.toUpperCase() === "POST" && data instanceof Object) {
    config.data = qs.stringify(data);
  }
  return config;
});

// 响应拦截器
axios.interceptors.response.use(
  response => {
    Nprogress.end()
    return response.data;
  },
  error => {
    // 必须返回一个promise对象(null和undefined也不可以)
    // message.error(error.message)
    message.error('请求出错,请联系管理员')
    return new Promise(()=>{})
  }
);

export default axios;
