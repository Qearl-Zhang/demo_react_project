import React, { Component } from "react";

export default class App extends Component {
  state = {
    count:0
  }
  
  // 加法
  increment=()=>{
   const {selected_number} = this.refs
   const {count} = this.state
   this.setState({count:count+selected_number.value*1})
  }
  // 减法
  decrement=()=>{
    const {selected_number} = this.refs
    const {count} = this.state
    this.setState({count:count-selected_number.value*1})
  }
  // 如果是奇数就增加
  incrementIfOdd=()=>{
    const {selected_number} = this.refs
    const {count} = this.state
    if(count % 2 === 1){
      this.setState({count:count+selected_number.value*1})
    }
  }
  // 延迟+
  incrementAsync=()=>{
    const {selected_number} = this.refs
    const {count} = this.state
    setTimeout(()=>{
      this.setState({count:count+selected_number.value*1})
    },500)
  }
  render() {
    return (
      <div>
        <span>count is {this.state.count}</span><br/>
        <select ref="selected_number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>&nbsp;&nbsp;

      </div>
    )
  }
}
