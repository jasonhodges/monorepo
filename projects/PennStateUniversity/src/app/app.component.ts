import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'psu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Penn State University Football';
  env = environment;
}
