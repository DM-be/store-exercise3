import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Todo } from "./models/todo";
import { TodoState } from "./todo.state";

export const selectTodos = (state: TodoState) => state.todoList;

// create the selectCompletedTodos and SelectUncompletedTodos
// use the docs of ngrx selectors
