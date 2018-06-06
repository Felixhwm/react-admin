import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import Menu from './menu'
import { getMenu } from '../../api'

@inject('todo')
@observer
export default class App extends React.Component<any> {
  public state = {
    menuList: []
  }
  public initData = async() => {
    const res = await getMenu()
    this.setState({
      menuList: res.data
    })
  }
  public menuClickHandle = (e: any) => {
    console.log(e)
  }
  public componentDidMount() {
    console.log(this.props.todo)
    this.initData()
  }
  public render() {
    const { menuList } = this.state
    return (
      <Layout.Sider>
        <Menu 
          data={menuList} 
          rootpath="admin"
          mode="inline"
          onClick={this.menuClickHandle}/>
      </Layout.Sider>
    )
  }
}