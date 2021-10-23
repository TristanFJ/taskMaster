import {
  generateId
} from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.checked = data.checked
    this.listId = data.listId

  }
  get Template() {
    return `

    <div class="row">
    <div class="col-10">
    <input onclick="app.tasksController.toggleCheck('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}"
    ${this.checked ? 'checked' : ''}>
    <label for="${this.id}">${this.title}</label>
    </div>

    <div class="col-2 my-1">
    <button class="btn btn-sm btn-danger" onclick="app.tasksController.deleteTask('${this.id}')">x</button><br>
    </div>
    
    </div>

`
  }



}