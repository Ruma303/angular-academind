import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  template: `
    <article>
      <h2>TIME</h2>
      <p>{{ name() }}</p>
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
  name = input.required<string>();
}
