// counter的容器组件,起到一个连接作用
import Counter from "../components/counter";
import { increment, decrement } from "../redux/action_creators";
import { connect } from "react-redux";

/* // 完整写法
// 从redux中把state取出,以props传参的形式给UI组件
function mapReduxStateToProps(state) {
  // 该方法的返回值,会作为props参数传递给UI组件
  return { count: state }; // 此行代码相当于<Counter count{state}/>
} */

/* // 精简写法
const mapReduxStateToProps = state=>({ count: state })


const mapReduxMethodsToProps = dispatch => ({
  increment: value => dispatch(increment(value)),
  decrement: value => dispatch(decrement(value))
  }) */

  


/* // 完整写法
// 从redux中把dispatch取出,以props传参的形式给UI组件
function mapReduxMethodsToProps(dispatch) {
  // 该方法的返回值,会作为props参数传递给UI组件
  return {
    increment: value => dispatch(increment(value)),
    decrement: value => dispatch(decrement(value))
  }; // 此行代码相当于<Counter increment{操作状态的方法}/>
}
// 上方increment是用来创建action */

// 下方代码会生成一个容器组件
// 会映射redux中所保存的state/dispatch为props
// 会建立与UI组件(counter)的联系
/* // 完整写法
export default connect(mapReduxStateToProps,mapReduxMethodsToProps)(Counter); */

// 最终版---精简写法
export default connect(
  state=>({ count: state }),  //映射状态为props
  // 最终精简版
  {increment,decrement}

  /*精简 {
    increment:increment,   // 最终传递给UI组件的是:value => dispatch(increment(value))
    decrement:decrement   //最终传递给UI组件的是:value => dispatch(decrement(value)) 
  } */
  /* dispatch => ({
    increment: value => dispatch(increment(value)),  // 映射dispatch为props---作为加
    decrement: value => dispatch(decrement(value))  //映射dispatch为props---作为减
    }) */
)(Counter);
