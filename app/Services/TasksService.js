import {
  ProxyState
} from "../AppState.js";
import {
  Task
} from "../Models/Task.js"
import {
  ListsController
} from "../Controllers/ListsController.js";

class TasksService {
  constructor() {
    console.log('tasksService connected');
  }
}

export const tasksService = new TasksService();