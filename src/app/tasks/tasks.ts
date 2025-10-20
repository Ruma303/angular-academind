import { Component } from '@angular/core';
import { TaskComponent } from "./task/task";

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
        <li>
          <app-task [name]="'Default task'"/>
        </li> <li>
          <app-task [name]="'Default task'"/>
        </li> <li>
          <app-task [name]="'Default task'"/>
        </li> <li>
          <app-task [name]="'Default task'"/>
        </li>

      </ul>
    </main>
    </section>
  `,
  styleUrl: './tasks.css'
})
export class Tasks {

}
