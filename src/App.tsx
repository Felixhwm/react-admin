import * as React from 'react'
import { HashRouter , Route, Switch, Redirect } from 'react-router-dom'
import Admin from './page/admin'
import Login from './page/login'
import Register from './page/register'

export default class App extends React.Component {
  public render(): any {
    return (
      <HashRouter>
        <Switch>
          <Route path="/admin" component={Admin}/>
          <Route exact={true} path="/login" component={Login}/>
          <Route exact={true} path="/register" component={Register}/>
          <Redirect from="/" to="/admin"/>
        </Switch>
      </HashRouter>
    )
  }
}
