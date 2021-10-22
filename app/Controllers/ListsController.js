import {
  ProxyState
} from "../AppState.js";
import {
  listsService
} from "../Services/ListsService.js"

function _draw() {
  console.log('_draw() invoked');
  const lists = ProxyState.lists
  let template = ''

  lists.forEach(l => template += l.Template)
  console.log('drawing lists');
  document.getElementById('app').innerHTML = template
}




export class ListsController {
  constructor() {
    console.log('ListsController connected');
    _draw()

  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      title: form.title.value


    }

    console.log('createList invoked', newList);

  }


}