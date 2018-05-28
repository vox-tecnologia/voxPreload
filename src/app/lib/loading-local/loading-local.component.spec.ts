import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLocalComponent } from './loading-local.component';

describe('LoadingLocalComponent', () => {
  let component: LoadingLocalComponent;
  let fixture: ComponentFixture<LoadingLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
