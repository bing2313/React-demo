// 登录页面
import React , { Component } from 'react';
import {  } from 'antd';
import 'antd/dist/antd.css';
import '@/login/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoRightText: '用户登录'
    }
  }
  render() {
    return (
      <div className="Login_box">
        {/* 左上角logo */}
        <div className="left_top_logo">
          <img src={require('../images/nosizeimg.png')} alt="Logo" />
          <i></i>
          <span>{this.state.logoRightText}</span>
        </div>
        {/* 中间的模块 */}
        <div className="center_box">
          {/* 左侧的图片和白色logo */}
          <div className="center_left">
            {/* <div className="center_bg"> */}
              <img src={require('../images/login-bg.png')} alt="左侧" />
            {/* </div> */}
            <div className="logo_white">
              <img src={require('../images/whiteLogo.png')} alt="左侧" />
              <span>为获课而生</span>
            </div>
          </div>
          {/* 右侧组件的位置 */}
          <div className=""></div>
        </div>
        {/* 下方的认证编号 */}
        <div className="bottom_ICP"></div>
      </div>
    )
  }
}

export default Login;