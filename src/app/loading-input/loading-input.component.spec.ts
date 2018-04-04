import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingInputComponent } from './loading-input.component';

describe('LoadingInputComponent', () => {
  let component: LoadingInputComponent;
  let fixture: ComponentFixture<LoadingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
