import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewMedicineComponent } from './user-view-medicine.component';

describe('UserViewMedicineComponent', () => {
  let component: UserViewMedicineComponent;
  let fixture: ComponentFixture<UserViewMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
