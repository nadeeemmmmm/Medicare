import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicineByCategoryComponent } from './admin-medicine-by-category.component';

describe('AdminMedicineByCategoryComponent', () => {
  let component: AdminMedicineByCategoryComponent;
  let fixture: ComponentFixture<AdminMedicineByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMedicineByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMedicineByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
