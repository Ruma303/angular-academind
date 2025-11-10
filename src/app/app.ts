import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { UserModel } from './user/user.model';

@Component({
  selector: 'app-root',
  template: `
    <app-header />
    <main>
      <ul id="users">
        @for (user of users; track user.id) {
          <li>
            <app-user [user]="user" [selected]="selectedUserId === user.id" (select)="onSelectUser($event)" />
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
  styleUrl: './app.css',
  standalone: false
})
export class AppComponent {
  users: UserModel[] = DUMMY_USERS;
  selectedUser: UserModel | null = null;

  constructor() {
    this.selectedUser = this.users[0];
  }

  get selectedUserId() {
    return this.users.find(user => user.id === this.selectedUser?.id)?.id;
  }

  onSelectUser(user: UserModel) {
    this.selectedUser = user;
  }
}
