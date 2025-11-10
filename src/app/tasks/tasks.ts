import { Component, Input } from '@angular/core';
import { TasksService } from '../services/tasks';
import type { TaskModel } from './task/task.model';
import { UserModel } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  template: `
    @if (isAddingTask) {
      <app-new-task
        [userId]="user.id"
        (close)="onCancelledTask()"
      />
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
  @Input({ required: true }) user!: UserModel;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(): TaskModel[] {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelledTask() {
    this.isAddingTask = false;
  }
}