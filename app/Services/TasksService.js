import {
  ProxyState
} from "../AppState.js";
import {
  Task
} from "../Models/Task.js"

class TasksService {
  createTask(taskData) {
    console.log('createTask() invoked', taskData);

    const task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }

}

export const tasksService = new TasksService();