import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
const { TabPane } = Tabs;

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabNum: '465465'
    }
  }
  callback(key) {
    console.log(key);
    this.setState({tabNum: key})
  }
  
  render() {
    return (
      <div className="content_box">
        <Tabs defaultActiveKey="2" onChange={(key)=> this.callback(key)}>
          <TabPane tab="页面一" key="1">
            <PageOne tabNum={this.state.tabNum} />
          </TabPane>
          <TabPane tab="页面二" key="2">
            <PageTwo />
          </TabPane>
          <TabPane tab="页面三" key="3">
            <PageThree />
          </TabPane>
        </Tabs>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/TodoList">跳转到首页</Link>
      </div>
    )
  }
}

export default Tab;