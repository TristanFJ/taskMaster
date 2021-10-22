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

<!---  Tasks --->

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
        aria-describedby="button-addon1">
      <button class="btn btn-outline-secondary" type="button" id="add-task"
        onclick="console.log('add task btn')">Add task</button>
    </div>
  </div>

  `
  }
}