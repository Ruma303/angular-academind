import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task';
import { TasksComponent } from './tasks';
import { NewTaskComponent } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TasksComponent]
})
export class TaskModule {}