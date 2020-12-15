import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos : Todo[] = [
    // new Todo(1,"", false),
    // new Todo(2,"", true),
    // new Todo(3,"", false),
    // new Todo(4,"", true),
    // new Todo(5,"", true),
    // new Todo(6,"", false),
    // new Todo(7,"", true),
    // new Todo(8,"", false),
    // new Todo(9,"", true),
    // new Todo(10,"", false),
    // new Todo(11,"", true)
                  ]

  cpt : number = 0;
  blue : string = "blue";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo (todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo (num: number) {
    this.todos.forEach( (item, i) => {
      if(item.num === num) this.todos.splice(i,1);
    });
  }

  updateTodo (i: number, todo: Todo) {
    if (todo.num != undefined){
      this.todos[i].num = todo.num;
    }
    if (todo.txt != undefined){
      this.todos[i].txt = todo.txt;
    }
    if (todo.num != undefined){
      this.todos[i].faite = todo.faite;
    }
  }

}
