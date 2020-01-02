import React from 'react'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
import TodoList from '@/TodoList'
import Tab from '@/Tab'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/TodoList' component={TodoList}></Route>
      <Route path='/Tab' component={Tab}></Route>
    </Switch>
  </BrowserRouter>
)