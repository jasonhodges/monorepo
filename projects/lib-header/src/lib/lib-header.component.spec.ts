import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibHeaderComponent } from './lib-header.component';

describe('LibHeaderComponent', () => {
  let component: LibHeaderComponent;
  let fixture: ComponentFixture<LibHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
