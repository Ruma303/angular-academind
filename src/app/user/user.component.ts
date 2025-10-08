import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input<string>();
  name = input.required<string>(); // Con required non possiamo passare un valore default

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() { }
}
