import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';
import { CardComponent } from './shared/card/card';

@NgModule({
  declarations: [ // Non standalone components
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    CardComponent
  ],
  imports: [// Standalone components ed import di altri moduli Angular
    BrowserModule,

    // Queste dipendenze non sono necessarie,
    // in quanto importate già da BrowserModule
    FormsModule,
    DatePipe
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {

}