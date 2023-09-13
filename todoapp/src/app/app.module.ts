import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetworkerrorComponent } from './components/others/networkerror/networkerror.component';
import { TodoformComponent } from './components/todo/todoform/todoform.component';
import { TodoitemsComponent } from './components/todo/todoitems/todoitems.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkerrorComponent,
    TodoformComponent,
    TodoitemsComponent,
    TodolistComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
