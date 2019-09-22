import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'rutg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rutgers University Football';
  env = environment;
}
