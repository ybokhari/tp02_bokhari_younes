import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { DetailsFormComponent } from '../details-form/details-form.component';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, DetailsFormComponent],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = new User(1, '', '', '', '', '', '', '', '', '', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  onEditClicked() {
    this.submitted = false;
  }
}
