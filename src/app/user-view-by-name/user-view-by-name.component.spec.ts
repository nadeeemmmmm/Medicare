import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewByNameComponent } from './user-view-by-name.component';

describe('UserViewByNameComponent', () => {
  let component: UserViewByNameComponent;
  let fixture: ComponentFixture<UserViewByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
