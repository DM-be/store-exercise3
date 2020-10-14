import { Component, OnInit, VERSION } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "./store/app.state";
import { Todo } from "./store/models/todo";
import { AddTodoAction } from "./store/todo.action";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public completedTodos$: Observable<Todo[]>;
  public todoText: string;

  public uncompletedTodos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    //this.todos$ = this.store.select(state => state.todoState.todoList);
    // use your own selector, pass in the todostate
    // 

  }

  public addTodo() {
    if (this.todoText.length > 0) {
      this.store.dispatch(new AddTodoAction(this.todoText));
      this.todoText = "";
    }
  }
}
