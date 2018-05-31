import { observable, computed } from 'mobx'

export interface TodoType {
  price:number
  amount:number
}

class Todo {
  @observable public price: number
  @observable public amount: number

  @computed public total(): number {
    return this.price * this.amount
  }
}

export default new Todo()