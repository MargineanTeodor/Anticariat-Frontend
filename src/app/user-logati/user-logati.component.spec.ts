import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogatiComponent } from './user-logati.component';

describe('UserLogatiComponent', () => {
  let component: UserLogatiComponent;
  let fixture: ComponentFixture<UserLogatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
