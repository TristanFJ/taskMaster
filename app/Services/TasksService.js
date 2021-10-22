import {
  ProxyState
} from "../AppState.js";
import {
  Task
} from "../Models/Task.js"
import {
  saveState
} from "../Utils/LocalStorage.js";

class TasksService {
  createTask(taskData) {

    const task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }

  toggleCheck(id) {
    const tasks = ProxyState.tasks
    const found = tasks.find(task => id == task.id)
    found.checked = !found.checked
    ProxyState.tasks = ProxyState.tasks
    saveState()
  }

  deleteTask(id) {
    if (window.confirm('Are you sure you want to DELETE your beautiful task?!?!')) {
      ProxyState.tasks = ProxyState.tasks.filter(l => l.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    }


  }
}

export const tasksService = new TasksService();