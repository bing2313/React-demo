import React, { Component } from 'react'

class PageOne extends Component {
  render() {
    return (
      <div className="PageOne">
        pageone页面
        <br />
        {this.props.tabNum}
        <br />
        <img src={require('@/images/login-bg.png')} alt="测试图片标签的显示" />
      </div>
    )
  }
}

export default PageOne;