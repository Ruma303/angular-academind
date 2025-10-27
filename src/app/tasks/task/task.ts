import { Component, input, output } from '@angular/core';
import { Card } from "../../shared/card/card";
import { DatePipe, TitleCasePipe } from '@angular/common';

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
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.id())
  }
}