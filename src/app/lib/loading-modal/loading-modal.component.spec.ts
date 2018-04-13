import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingModalComponent } from './loading-modal.component';
import { LoadingModalService } from './loading-modal.service';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

describe('LoadingModalComponent', () => {
  let component: LoadingModalComponent;
  let fixture: ComponentFixture<LoadingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingModalComponent ],
      imports: [NgbModule, NgbModalModule.forRoot()],
      providers: [LoadingModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
