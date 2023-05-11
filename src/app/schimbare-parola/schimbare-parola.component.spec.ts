import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchimbareParolaComponent } from './schimbare-parola.component';

describe('SchimbareParolaComponent', () => {
  let component: SchimbareParolaComponent;
  let fixture: ComponentFixture<SchimbareParolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchimbareParolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchimbareParolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
