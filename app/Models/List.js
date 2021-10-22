import {
  generateId
} from "../Utils/generateId.js";

export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.description = data.description
    this.color = data.color


  }



}