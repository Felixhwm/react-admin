import { observable, action } from 'mobx'


class Tool {
  @observable public collapsed: boolean = false

  @action public toggleCollapse  = (collapsed?: boolean): any => {
    this.collapsed = !this.collapsed
  }
}

const NewTool = new Tool()

export default NewTool