import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewMedicineComponent } from './admin-view-medicine.component';

describe('AdminViewMedicineComponent', () => {
  let component: AdminViewMedicineComponent;
  let fixture: ComponentFixture<AdminViewMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
