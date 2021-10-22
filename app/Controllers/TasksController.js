import {
  tasksService
} from "../Services/TasksService.js"

export class TasksController {
  constructor() {
    console.log('TasksController connected');

  }

  createTask(lId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskData = {
      title: form.title.value,
      listId: lId,
      checked: false
    }
    console.log('createTask() invoked', taskData);
    tasksService.createTask(taskData)
  }

  toggleCheck(tId) {
    tasksService.toggleCheck(tId)
    console.log('toggle');
  }


}