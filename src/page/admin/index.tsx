import * as React from 'react'
import { Layout } from 'antd'
import Sider from '../../compoent/sider'
import './index.less'

export default class App extends React.Component {
  public render() {
    return (
      <Layout className="layout-top">
        <Sider/>
        <Layout style={{flexDirection: 'column'}}>
            <Layout.Header/>
            <Layout.Content style={{ margin: '0 16px', overflow: 'initial' }}>
                <div>
                  <h1>admin</h1>
                </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
            React-Admin ©2017 Created by 865470087@qq.com
            </Layout.Footer>
        </Layout>
    </Layout>
    )
  }
}