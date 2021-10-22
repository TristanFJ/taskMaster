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

    console.log('createTask() invoked', taskData);

    const task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }

  toggleCheck(id) {
    const tasks = ProxyState.tasks
    const found = tasks.find(task => id == task.id)
    found.checked = !found.checked
    saveState()
  }

}

export const tasksService = new TasksService();