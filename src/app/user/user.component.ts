import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
  <div>
  <button (click)="onSelectUser()">
    <img
      [src]="imagePath()"
      [alt]="name()"
    >
    <span>{{ name() }}</span>
  </button>
</div>
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input<string>();
  name = input.required<string>(); // Con required non possiamo passare un valore default

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() { }
}
