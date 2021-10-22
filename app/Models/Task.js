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
<div>${this.title}</div>
`
  }

}