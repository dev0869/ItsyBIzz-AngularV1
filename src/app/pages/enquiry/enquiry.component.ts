import { Component } from '@angular/core';
import { EnqueryFormComponent } from '../../components/enquery-form/enquery-form.component';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [EnqueryFormComponent],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {

}
