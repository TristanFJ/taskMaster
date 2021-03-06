import {
  ProxyState
} from "../AppState.js";
import {
  generateId
} from "../Utils/generateId.js";

export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.color = data.color
    this.tasks = data.tasks
    this.completed = data.completed


  }


  get Template() {
    return `
    <div class="col-4 card p-3 m-3 elevation-4" style="border-width: 3px; width: fit-content; height: fit-content; border-color: ${this.color};">

    
    <button class="btn btn-sm btn-danger" onclick="app.listsController.deleteList('${this.id}')">Delete List</button>
    <div class="card-body">
      <h5 class="card-title text-center">${this.title}</h5>
      <p class="card-text text-center">${this.completed ? this.completed : this.countTasks()}</p>
    </div>

<div class="container text-left d-flex flex-column">
    ${this.getTasks()}
</div>

<form onsubmit="app.tasksController.createTask('${this.id}')">

<div class="col pt-3 input-group text-center">

  <label for="" class="form-label me-3">Add Task:</label>
  <input class="elevation-4" type="text" name="title" minlength="3" maxlength="50" required>
</div>
</form>
  </div>

  `
  }


  getTasks() {

    const tasks = ProxyState.tasks.filter(t => this.id == t.listId)
    let template = ''
    tasks.forEach(t => {
      template += t.Template
    })
    return template
  }

  countTasks() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.listId)
    let totalTasks = tasks.length
    let found = tasks.filter(task => task.checked == true)
    let totalComplete = found.length
    return `${totalTasks} tasks / ${totalComplete} complete`
  }
}