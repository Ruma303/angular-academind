import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { DUMMY_TASKS } from '../dummy-tasks';
import type { TaskModel } from './task/task.model';
import { UserModel } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  template: `
  <section>
    <header>
      <h2>Tasks</h2>
      <menu>
        <button>Add Task</button>
        <button>Remove Task</button>
      </menu>
    </header>

    <main>
      <ul>
      @for (task of selectedUserTasks; track task.id) {
        <li>
          <app-task [title]="task.title" [dueDate]="task.dueDate" [summary]="task.summary" />
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

  get selectedUserTasks(): TaskModel[] {
    return this.tasks.filter(task => task.userId === this.user.id);
  }
}
