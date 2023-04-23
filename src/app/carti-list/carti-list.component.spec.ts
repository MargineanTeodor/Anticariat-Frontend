import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartiListComponent } from './carti-list.component';

describe('CartiListComponent', () => {
  let component: CartiListComponent;
  let fixture: ComponentFixture<CartiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
