import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-enquery-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquery-form.component.html',
})
export class EnqueryFormComponent {
  sendingData: boolean = false;
  enqueryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      // Validators.pattern('^[6-9]d{9}$'),
    ]),
    city: new FormControl('', [Validators.required]),
    requirement: new FormControl('', [Validators.required]),
    wantFinace: new FormControl('', [Validators.required]),
  });

  handleSubmit() {
    if (!this.enqueryForm.valid) {
      return;
    }
    // debugger;
    console.log(this.enqueryForm.value);
    this.sendingData = true;
    // this.enqueryForm.reset()
  }
}
