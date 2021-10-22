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
    <div class="card p-3 m-3 elevation-4" style="border-width: 3px; width: 15rem; border-color: ${this.color};">
    <button class="btn btn-sm btn-danger" onclick="app.listsController.deleteList('${this.id}')">Delete List</button>
    <div class="card-body">
      <h5 class="card-title text-center">${this.title}</h5>
      <p class="card-text text-center">${this.completed ? this.completed : '0/0'}</p>
    </div>

<div>
    ${this.getTasks()}
</div>

<form onsubmit="app.tasksController.createTask('${this.id}')">

<div class="col-md-6 p-2">

  <label for="" class="form-label">Create New Task:</label>
  <input type="text" name="title" minlength="3" maxlength="50" required>
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
}