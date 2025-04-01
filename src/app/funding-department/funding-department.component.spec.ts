import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingDepartmentComponent } from './funding-department.component';

describe('FundingDepartmentComponent', () => {
  let component: FundingDepartmentComponent;
  let fixture: ComponentFixture<FundingDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
