import React, { Component } from "react";
import {  Button, Modal, message } from 'antd';
import 'antd/dist/antd.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      listIndex: ''
    }
  }
  delectItem (index) { // 删除Item选项
    this.setState({
      visible: true,
      listIndex: index
    })
  }
  handleOk () { // 删除对话框的确认按钮
    this.props.delectItem(this.state.listIndex)
    this.setState({visible: false})
    message.success('删除数据成功', 2)
  }
  // 在声明方法的时候用钩子函数和在调用的时候用钩子函数的效果是一样的
  handleCancel = () => { // 删除对话框的取消按钮
    this.setState({visible: false})
  }
  render() {
    return (
      <div>
        <ul className="list_box table_list_li">
          <li>{this.props.listItem}</li>
          <li>{this.props.index}</li>
          <li>
            <Button onClick={() => this.delectItem(this.state.index)} type="danger">删除</Button>
          </li>
        </ul>
        <Modal
          title="确定删除？"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={this.handleCancel}>
          <span>确定要删除本条数据吗？删除后不可恢复！</span>
        </Modal>
      </div>
    )
  }
}

export default TodoItem;