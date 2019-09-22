import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LibHeaderConfig, LibHeaderModule } from 'lib-header';
import { LibPlayerCardModule } from 'lib-player-card';
import { AppComponent } from './app.component';

const libHeaderConfig: LibHeaderConfig = {
  conference: 'B1G',
  abbreviation: 'IND',
  title: 'Indiana University Football',
};

const libPlayerCardConfig = {
  school: 'Indiana',
};

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule,
        LibHeaderModule.forRoot(libHeaderConfig),
        LibPlayerCardModule.forRoot(libPlayerCardConfig),
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Indiana University Football'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Indiana University Football');
  });
});
