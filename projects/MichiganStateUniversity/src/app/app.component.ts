import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'msu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MichiganStateUniversity';
  env = environment;
}
