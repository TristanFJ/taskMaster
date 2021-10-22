import {
  List
} from "./Models/List.js"
import {
  EventEmitter
} from "./Utils/EventEmitter.js"
import {
  isValidProp
} from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/List').List[]} */
  lists = [
    new List({
      id: 'firstfakelist',
      title: 'Get Groceries',
      color: '#62dc8d',
      completed: '3/4'


    })



  ]

  /** @type {import('./Models/Task').Task[]} */
  tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})