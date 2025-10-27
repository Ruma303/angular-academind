import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <article>
      <h2>{{ title() }}</h2>
      <p>Due: {{ dueDate() }}</p>
      <p>{{ summary() }}</p>
      <p class="actions">
        <button (click)="onCompleteTask()">Complete</button>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </article>
  `,
  styleUrl: './task.css'
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