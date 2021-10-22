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

}

export const listsService = new ListsService();