import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent],
  template: `
  <app-header />
  <main>
    <ul id="users">
      <li>
        <app-user [avatar]="users[0].avatar" [name]="users[0].name" />
      </li>
    </ul>
  </main>
  `,
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
}