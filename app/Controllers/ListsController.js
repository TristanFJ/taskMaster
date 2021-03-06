import {
  ProxyState
} from "../AppState.js";
import {
  listsService
} from "../Services/ListsService.js"
import {
  loadState,
  saveState
} from "../Utils/LocalStorage.js";

function _draw() {
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('app').innerHTML = template
}

export class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)
    loadState()
    _draw()
  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      title: form.title.value,
      color: form.color.value,
    }
    listsService.createList(newList)
    form.reset()
  }
  deleteList(id) {
    listsService.deleteList(id)
  }
}