import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task";
import { DUMMY_TASKS } from '../dummy-tasks';

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
          <app-task [title]="task.title" [dueDate]="task.dueDate" />
        </li>
      }
    </ul>
    </main>
  </section>
  `,
  styleUrl: './tasks.css'
})
export class Tasks {
  tasks = DUMMY_TASKS;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }
}
