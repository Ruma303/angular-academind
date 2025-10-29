import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TasksService } from '../../services/tasks';

@Component({
  selector: 'app-new-task',
  standalone: false,
  template: `
    <div class="backdrop" (click)="onCancel()"></div>
    <dialog open (click)="$event.stopPropagation()">
      <h2>Add Task</h2>
      <form (ngSubmit)="onSubmit()">
        <p>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" [(ngModel)]="enteredTitle"/>
        </p>
        <p>
          <label for="summary">Summary</label>
          <textarea id="summary" rows="5" name="summary" [(ngModel)]="enteredSummary"></textarea>
        </p>
        <p>
          <label for="due-date">Due Date</label>
          <input type="date" id="due-date" name="due-date" [(ngModel)]="enteredDate" />
        </p>
        <p class="actions">
          <button type="button" (click)="onCancel()">Cancel</button>
          <button type="submit">Create</button>
        </p>
      </form>
    </dialog>
  `,
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}