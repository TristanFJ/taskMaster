import {
  tasksService
} from "../Services/TasksService.js"

export class TasksController {
  constructor() {

  }

  createTask(lId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskData = {
      title: form.title.value,
      listId: lId,
      checked: false
    }
    tasksService.createTask(taskData)
  }

  deleteTask(id) {
    tasksService.deleteTask(id)
  }

  toggleCheck(tId) {
    tasksService.toggleCheck(tId)
  }

  countTasks() {
    tasksService.countTasks
  }


}