import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  template: `
    <article>
      <h2>{{ dueDate() }}</h2>
     <p>{{ title() }}</p>
      <p>SUMMARY</p>
      <p class="actions">
        <button>Complete</button>
        <button>Edit</button>
        <button>Delete</button>
      </p>
    </article>
  `
  ,
  styleUrl: './task.css'
})
export class TaskComponent {
  title = input.required<string>();
  dueDate = input<string>();
}
