import { observable, computed, action } from 'mobx'

export interface ITodoType {
  price: number
  amount: number
  total: number
  addAmount: any
}

class Todo {
  @observable public price: number = 0
  @observable public amount: number = 0

  constructor() {
    this.price = 20
    this.amount = 1
  }

  @computed get total(): number {
    return this.price * this.amount
  }

  @action public addAmount = (): any => {
    this.amount++
  }
}

const NewTodo = new Todo()

export default NewTodo