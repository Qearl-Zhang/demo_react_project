import React ,{Component} from 'react'
import {Redirect} from 'react-router-dom'
// 这个组件和redux打交道,要引入connect
import {connect} from 'react-redux'
import {deleteUserInfo} from '../../redux/actions/login_actions'

class Admin extends Component{
  logout =()=>{
    // 删除redux,localStorage中保存的用户数据
    this.props.deleteUserInfo()
    // 界面跳转,不用写,会自动跳转

  }
  render(){
    // 判断是否登录isLogin是否为false
    if(!this.props.userInfo.isLogin){
      // 用户没有登录,不允许到admi页面,强制跳转到admin
      // 在render里跳转必须return
      return <Redirect to="/login" />
    }
    return (
      <div>
        Hello,{this.props.userInfo.user.username}
        <button onClick={this.logout}>退出</button>
      </div>
    )
  }
}

export default connect(
  state=>({userInfo:state.userInfo}),
  {deleteUserInfo}
)(Admin)