import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, Tasks],
  template: `
    <app-header />
    <main>
      <ul id="users">
        @for (user of users; track user.id) {
          <li>
            <app-user [id]="user.id" [avatar]="user.avatar" [name]="user.name" (select)="onSelectUser($event)" />
          </li>
        }
      </ul>

      @if (selectedUser) {
        <app-tasks [userId]="selectedUser.id" [name]="selectedUser.name"/>
      } @else {
        <p id="fallback">Select a user to see their tasks!</p>
      }
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUser: { id: string, name: string } | null = null;

  onSelectUser(event: { id: string, name: string }) {
    this.selectedUser = event;
  }
}