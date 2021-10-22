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

    <input onclick="app.tasksController.toggleCheck()" type="checkbox" id="${this.id}" name="${this.id}"
    ${this.checked ? 'checked' : ''}>
    <label for="${this.id}">${this.title}</label><br>

`
  }


}