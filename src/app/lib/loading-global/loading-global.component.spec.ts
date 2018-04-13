import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingGlobalComponent } from './loading-global.component';
import { LoadingGlobalService } from './loading-global.service';

describe('LoadingGlobalComponent', () => {
  let component: LoadingGlobalComponent;
  let fixture: ComponentFixture<LoadingGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingGlobalComponent ],
      providers: [LoadingGlobalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
