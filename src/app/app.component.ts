import { Component } from '@angular/core';
import{faFacebook,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import{faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'creativeapp';
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn
}
