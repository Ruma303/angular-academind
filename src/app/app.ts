import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { UserModel } from './user/user.model';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  template: `
    <app-header />
    <main>
      <ul id="users">
        @for (user of users; track user.id) {
          <li>
            <app-user [user]="user" (select)="onSelectUser($event)" />
          </li>
        }
      </ul>
      @if (selectedUser) {
        <app-tasks [user]="selectedUser" />
      } @else {
        <p id="fallback">Select a user to see their tasks!</p>
      }
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  users: UserModel[] = DUMMY_USERS;
  selectedUser: UserModel | null = null;

  onSelectUser(user: UserModel) {
    this.selectedUser = user;
  }
}
