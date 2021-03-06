import React from 'react'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
import Login from '@/login/Login'
import TodoList from '@/TodoList'
import Tab from '@/Tab'
// import PageTwo from '@/components/PageTwo'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/Tab' component={Tab}></Route>
      <Route path='/Login' component={Login}></Route>
      <Route path='/' component={TodoList}></Route>
    </Switch>
  </BrowserRouter>
)