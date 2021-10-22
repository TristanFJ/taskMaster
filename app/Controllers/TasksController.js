import {
  tasksService
} from "../Services/TasksService.js"

export class TasksController {
  constructor() {
    console.log('TasksController connected');

  }

  createTask(tId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskData = {
      title: form.title.value,
      taskId: tId,
    }
    console.log('createTask() invoked', taskData);
    tasksService.createTask(taskData)
  }

}