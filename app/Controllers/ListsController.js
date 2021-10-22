import {
  ProxyState
} from "../AppState.js";
import {
  listsService
} from "../Services/ListsService.js"

function _draw() {
  const lists = ProxyState.lists
  console.log('_draw() invoked');
  let template = ''

  lists.forEach(l => template += l.Template)
  console.log('drawing lists');
  document.getElementById('app').innerHTML = template
}




export class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    console.log('ListsController connected');
    _draw()
  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      title: form.title.value,
      color: form.color.value,
    }
    console.log('createList invoked', newList);
    listsService.createList(newList)
    form.reset()
  }
  deleteList(id) {
    listsService.deleteList(id)
  }
}