import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms' // for formGroup issue

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { CatsComponent } from './cats/cats.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UsersFormsComponent } from './users-forms/users-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    CatsComponent,
    TodoListComponent,
    UsersFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
