import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, NgFor, Tasks],
  template: `
  <app-header />
  <main>
    <ul id="users">
      <li *ngFor="let user of users" >
        <app-user
          [id]="user.id"
          [avatar]="user.avatar"
          [name]="user.name"
          (select)="onSelectUser($event)"
        />
      </li>
    </ul>

    <app-tasks />
  </main>
  `,
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  taskString = "'s Task"
  task = { name: DUMMY_USERS[0].name + this.taskString };

  onSelectUser(event: { id: string, name :string }) {
    this.task.name = event.name + this.taskString;
   }
}