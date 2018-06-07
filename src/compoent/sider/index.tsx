import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { Layout } from 'antd'
import Menu from './menu'
import { getMenu } from 'src/api'
import './index.less'

interface IState {
  menuList: any[],
}

interface IProps {
  size?: any
  tool?: any
}

@inject('size', 'tool')
@observer
export default class App extends React.Component<IProps,IState> {
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
    const { size, tool } = this.props
    if (size.mobile) {
      tool.toggleCollapse(true)
    }
    console.log(e)
  }

  public componentDidMount() {
    this.initData()
  }
  public render() {
    const { menuList } = this.state
    const { tool } = this.props
    return (
      <Layout.Sider 
        className="sider" 
        trigger={null}
        collapsible={true}
        collapsed={tool.collapsed}
        breakpoint="lg"
        collapsedWidth="0">
        <div className="logo">
          <img width="40" src={require('src/style/imgs/react.svg')} alt=""/>
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