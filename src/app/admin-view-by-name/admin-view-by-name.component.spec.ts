import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewByNameComponent } from './admin-view-by-name.component';

describe('AdminViewByNameComponent', () => {
  let component: AdminViewByNameComponent;
  let fixture: ComponentFixture<AdminViewByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
