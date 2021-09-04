import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Home } from '../pages/index'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={() => <h1>Login</h1>}/>
                <Route exact path="/register" component={() => <h1>Login</h1>}/>
                <Route exact component={() => <h1>Error 404</h1>}/>
            </Switch>
        </Router>
    )
}
