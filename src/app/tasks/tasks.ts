import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { DUMMY_TASKS } from '../dummy-tasks';
import type { NewTaskType, TaskModel } from './task/task.model';
import { UserModel } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  template: `

  @if (isAddingTask) {
    <app-new-task (cancel)="onCancelledTask()" (add)="onAddTask($event)"/>
  }

  <section id="tasks">
    <header>
      <h2>{{ user.name }}'s Tasks</h2>
      <menu>
        <button (click)="onStartAddTask()">Add Task</button>
        <button>Remove Task</button>
      </menu>
    </header>

    <main>
      <ul>
      @for (task of selectedUserTasks; track task.id) {
        <li>
          <app-task
            [title]="task.title"
            [dueDate]="task.dueDate"
            [summary]="task.summary" [id]="task.id"
            (complete)="onCompleteTask($event)"
          />
        </li>
      }
    </ul>
    </main>
  </section>
  `,
  styleUrl: './tasks.css'
})
export class TasksComponent {
  tasks: TaskModel[] = DUMMY_TASKS;
  @Input({ required: true }) user!: UserModel;
  isAddingTask = false;

  get selectedUserTasks(): TaskModel[] {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelledTask() {
    this.isAddingTask = false;
  }

  onAddTask(task: NewTaskType) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      userId: this.user.id
    });
    this.isAddingTask = false;
  }
}
