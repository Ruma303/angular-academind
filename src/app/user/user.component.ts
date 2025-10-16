import { Component, input, computed, output } from '@angular/core';

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
  id = input.required<string>();
  avatar = input<string>();
  name = input.required<string>();
  select = output<string>()

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.id());
   }
}
