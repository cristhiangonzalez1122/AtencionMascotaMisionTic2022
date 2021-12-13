import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCentroVetComponent } from './buscar-centro-vet.component';

describe('BuscarCentroVetComponent', () => {
  let component: BuscarCentroVetComponent;
  let fixture: ComponentFixture<BuscarCentroVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCentroVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCentroVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
