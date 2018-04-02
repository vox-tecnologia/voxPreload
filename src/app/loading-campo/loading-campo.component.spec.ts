import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCampoComponent } from './loading-campo.component';

describe('LoadingCampoComponent', () => {
  let component: LoadingCampoComponent;
  let fixture: ComponentFixture<LoadingCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
