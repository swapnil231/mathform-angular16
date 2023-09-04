import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuationComponent } from './euation.component';

describe('EuationComponent', () => {
  let component: EuationComponent;
  let fixture: ComponentFixture<EuationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuationComponent]
    });
    fixture = TestBed.createComponent(EuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
