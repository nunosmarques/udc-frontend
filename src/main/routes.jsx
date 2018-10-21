import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'
import MyTest from '../mytest/mytest'
import NotFound from '../template/404'

export default props => (
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo}/>
        <Route path="/about" component={About}/>
        <Route path="/mytest" component={MyTest}/>
        <Route path="/404-not-found" component={NotFound}/>
        <Redirect from="*" to="/404-not-found" />
    </Router>
)