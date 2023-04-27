import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartiAutorComponent } from './lista-carti-autor.component';

describe('ListaCartiAutorComponent', () => {
  let component: ListaCartiAutorComponent;
  let fixture: ComponentFixture<ListaCartiAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCartiAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCartiAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
