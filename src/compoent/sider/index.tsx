import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import Menu from './menu'
import { getMenu } from '../../api'
import './index.less'

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
      <Layout.Sider className="sider">
        <div className="logo">
          <img width="40" src="https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg" alt=""/>
          <img width="40" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
        </div>
        <Menu 
          data={menuList} 
          rootpath="admin"
          mode="inline"
          theme="dark"
          onClick={this.menuClickHandle}/>
      </Layout.Sider>
    )
  }
}