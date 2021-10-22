import {
  ProxyState
} from "../AppState.js";
import {
  List
} from "../Models/List.js";
import {
  Task
} from "../Models/Task.js";

export function saveState() {
  localStorage.setItem('TasksApp', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks,
  }))
  console.log('saveState() invoked');
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('TasksApp'))
  console.log('loadState() invoked', data);

  if (data) {
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.tasks = data.tasks.map(t => new Task(t))
  }
}