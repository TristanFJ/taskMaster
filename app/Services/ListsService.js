import {
  ProxyState
} from "../AppState.js";
import {
  ListsController
} from "../Controllers/ListsController.js";
import {
  List
} from "../Models/List.js";

class ListsService {
  constructor() {
    console.log('ListsService connected');

  }

  createList(listData) {
    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists, list]
  }

  deleteList(id) {
    if (window.confirm('Are you sure you want to DELETE your beautiful list?!?!')) {
      ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    }
  }

}

export const listsService = new ListsService();