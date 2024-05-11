import { Component } from '@angular/core';
import { EnqueryFormComponent } from '../../components/enquery-form/enquery-form.component';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [EnqueryFormComponent],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css',
})
export class EnquiryComponent {
  userProfile: any;
  constructor(private profileService: ProfileService) {
    // this.userProfile = this.profileService.fetchProfile();
  }

  ngOnInit() {
    this.userProfile = this.profileService.userProfileSignal();
    console.log(this.userProfile);
  }
}
