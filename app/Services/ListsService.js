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


}

export const listsService = new ListsService();