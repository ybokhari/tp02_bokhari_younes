// details-form.component.ts
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'details-form',
  standalone: true,
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css'],
})
export class DetailsFormComponent {
  @Input() user!: User;
  @Input() submitted!: boolean;
  @Output() editClicked = new EventEmitter<void>();

  onEditClick() {
    this.editClicked.emit();
  }
}
