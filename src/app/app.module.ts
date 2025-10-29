import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks';
import { TaskComponent } from './tasks/task/task';


@NgModule({
  declarations: [AppComponent], // Non standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent, TaskComponent], // Standalone components
  providers: [],
})
export class AppModule {

}