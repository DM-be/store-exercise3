import { Component, EventEmitter,  Input, OnInit, Output } from "@angular/core";
import { Todo } from "../models/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {
    
  }

 
}
