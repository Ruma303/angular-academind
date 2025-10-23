import { Component, input, computed, output } from '@angular/core';
import type { UserModel } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
  <div>
    <button (click)="onSelectUser()">
      <img [src]="imagePath()" [alt]="user().name">
      <span>{{ user().name }}</span>
    </button>
  </div>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<UserModel>();
  select = output<UserModel>();

  imagePath = computed(() => 'assets/users/' + (this.user()?.avatar ?? 'default.jpg'));

  onSelectUser() {
    this.select.emit(this.user());
  }
}
