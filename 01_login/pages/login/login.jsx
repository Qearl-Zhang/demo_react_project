import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import logo from "./images/logo.png";
import "./css/login.less";
const { Item } = Form;

class Login extends Component {
  // 响应表单的提交
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      // 对表单进行最后一步统一验证
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  // 自定义 密码的验证
  pwdValidator = (rule, value, callback) => {
    if (!value) {
      callback("密码必须输入");
    } else if (value.length < 4) {
      callback("密码必须大于等于4位");
    } else if (value.length > 12) {
      callback("密码必须小于等于12位");
    } else if (!/^\w+$/.test(value)) {
      callback("密码必须是英文、数字或下划线组成");
    }
    callback();
  };
  render() {
    /* 用户名的声明式验证 */
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="login">
        <div className="header">
          <img src={logo} alt="logo" />
          <h1>商品管理系统</h1>
        </div>
        <div className="content">
          <div>
            {<h1>用户登录</h1>}
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Item>
                {/* 用户名/密码的的合法性要求
									1). 必须输入
									2). 必须大于等于4位
									3). 必须小于等于12位
									4). 必须是英文、数字或下划线组成 */}
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "用户名必填!" }, // 限制该输入域必须输入
                    { min: 4, message: "用户名必须大于4位" },
                    { max: 12, message: "用户名必须小于12位" },
                    { pattern: /^\w+$/, message: "只能输入英文、数字、下划线" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                  />
                )}
              </Item>
              <Item>
                {getFieldDecorator("password", {
                  rules: [{ validator: this.pwdValidator }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Item>
              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

// 加工我们所写的Login组件，生成一个新的WrappedLogin，页面真正渲染的是WrappedLogin
/* const WrappedLogin = Form.create()(Login)
export default WrappedLogin */

export default Form.create()(Login);
