import { Component, input, inject } from '@angular/core';
import { Card } from "../../shared/card/card";
import { DatePipe, TitleCasePipe } from '@angular/common';
import { TasksService } from '../../services/tasks';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe, TitleCasePipe],
  template: `
  <app-card>
    <article>
      <h2>{{ title() | titlecase }}</h2>
      <p>Due: {{ dueDate() | date:'fullDate' }}</p>
      <p>{{ summary() }}</p>
      <p class="actions">
        <button (click)="onCompleteTask()">Complete</button>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </article>
  </app-card>
  `,
  styleUrl: './task.css',
})
export class TaskComponent {
  title = input.required<string>();
  dueDate = input.required<string>();
  summary = input.required<string>();
  id = input.required<string>();
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.id())
  }
}