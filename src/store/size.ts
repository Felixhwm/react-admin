import { observable, computed, action } from 'mobx'

interface Iarg {
  width: number
  mobile: boolean
}

class Size {
  @observable public width: number
  @observable public mobile: boolean

  @computed get small(): boolean {
    return this.width < 992
  }

  @action public resize = (arg: Iarg): any => {
    const { width, mobile } = arg
    this.width = width
    this.mobile = mobile
  }
}

const NewSize = new Size()

export default NewSize