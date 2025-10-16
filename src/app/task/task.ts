import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  template: `
    <div>
      <p>{{ name() }}</p>
    </div>
  `
  ,
  styleUrl: '../user/user.component.css'
})
export class TaskComponent {
  name = input.required<string>();
}
