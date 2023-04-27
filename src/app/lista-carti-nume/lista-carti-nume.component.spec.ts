import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartiNumeComponent } from './lista-carti-nume.component';

describe('ListaCartiNumeComponent', () => {
  let component: ListaCartiNumeComponent;
  let fixture: ComponentFixture<ListaCartiNumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCartiNumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCartiNumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
