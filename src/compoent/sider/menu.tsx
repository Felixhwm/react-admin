import * as React from 'react'
import { Menu, Icon } from 'antd'

interface Iitem {
  icon?: string,
  id: number,
  name: string,
  route: string,
  children?: object[]
}

interface Iprops {
  data: Iitem[],
  rootpath: string,
  [propName: string]: any
}

export default ({data, rootpath, ...props}: Iprops) => 
  <Menu {...props}>
    {
      data && data.map((item: Iitem) => 
      item.children? 
      <Menu.SubMenu
        key={rootpath + item.route }
        title={
          <span>
            { item.icon && <Icon type={item.icon} />}
            <span>{item.name}</span>
          </span>
        }>
        {
          item.children && item.children.map((each: Iitem) => 
            <Menu.Item
              key={rootpath + each.route }>
              <span>{ each.name }</span>
            </Menu.Item>
          )
        }
      </Menu.SubMenu> :
      <Menu.Item
        key={rootpath + item.route }>
        <span>
        { item.icon && <Icon type={item.icon} />}
          <span>{ item.name }</span>
        </span>
      </Menu.Item>
      )
    }
  </Menu>
