import * as React from 'react'
import { HashRouter , Route, Switch, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Admin from '../page/admin'
import Login from '../page/login'
import Register from '../page/register'

@inject('size', 'tool')
@observer
export default class App extends React.Component<any> {
  public resize = () => {
    this.props.size.resize({
      mobile: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
      width: document.body.clientWidth
    })
  }
  public componentDidMount() {
    this.resize()
    window.onresize = () => {
      this.resize()
    }
    const { size, tool } = this.props
    if (size.mobile) {
      tool.toggleCollapse(true)
    }
  }
  public render() {
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