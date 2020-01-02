import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import TodoItem from '@/TodoItem.js'
import '@/index.css';
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        '我是默认的第一条数据',
        '我是默认的第二条数据',
      ]
    }
  }
  submitBtn = e => { // 提交按钮的点击事件
    // 获取antd表单文本框的值
    let username = this.props.form.getFieldValue('username');
    // 将新添加的值push到数组中
    let arr = [...this.state.list]
    if (!username) message.warning('内容不能为空！', 2)
    else arr.push(username)
    this.setState({
      list: arr
    })
    message.success('添加数据成功', 2)
    // 改变antd表单文本框的值
    this.props.form.setFieldsValue({
      username: ''
    })
  }
  delectItem (index) { // 子组件传过来的方法，主要是拿到子组件传来的值
    let arr = [...this.state.list]
    arr.splice(index, 1)
    this.setState({
      list: arr
    })
  }
  render () {
    // getFieldDecorator用于和表单进行双向绑定
    const {getFieldDecorator} = this.props.form
    let listDom;
    if (this.state.list.length > 0) {
      listDom = this.state.list.map((item, index) => {
                  return (
                    <TodoItem
                      delectItem={() => this.delectItem()}
                      key={index}
                      listItem={item}
                      index={index}/>
                  )
                })
    } else {
      listDom = <ul className="list_box">
                  <li>暂无数据</li>
                </ul>
    }
    return (
      <div className="content_box">
        <Form className="form_box">
          <div className="flex_box">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请填点内容吧~~~"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="submi_btn" onClick={this.submitBtn}>
                确定
              </Button>
            </Form.Item>
          </div>
          <Form.Item className="table_form">
            <ul className="list_box">
              <li>内容</li>
              <li>索引</li>
              <li>操作</li>
            </ul>
            {/* 在上面做了判断，显示表格或者暂无数据 ↓ */}
            { listDom }
          </Form.Item>
        </Form>
        <div>
          <Link to='/Tab'>跳转到tab栏切换页面</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Login">跳转到登录页面</Link>
        </div>
      </div>
    )
  }
}

// 使用getFieldDecorator的时候，导出这样导出才能使用getFieldDecorator
export default Form.create()(TodoList);
