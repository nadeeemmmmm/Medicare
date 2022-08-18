import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewByCategoryComponent } from './user-view-by-category.component';

describe('UserViewByCategoryComponent', () => {
  let component: UserViewByCategoryComponent;
  let fixture: ComponentFixture<UserViewByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
