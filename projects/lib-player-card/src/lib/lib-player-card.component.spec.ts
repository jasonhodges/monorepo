import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPlayerCardComponent } from './lib-player-card.component';

describe('LibPlayerCardComponent', () => {
  let component: LibPlayerCardComponent;
  let fixture: ComponentFixture<LibPlayerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibPlayerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
