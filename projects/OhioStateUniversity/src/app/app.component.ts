import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'osu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ohio State University Football';
  env = environment;
}
