import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFooterComponent } from './lib-footer.component';

describe('LibFooterComponent', () => {
  let component: LibFooterComponent;
  let fixture: ComponentFixture<LibFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
