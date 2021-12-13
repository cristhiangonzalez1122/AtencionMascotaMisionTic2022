import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCentroVetComponent } from './editar-centro-vet.component';

describe('EditarCentroVetComponent', () => {
  let component: EditarCentroVetComponent;
  let fixture: ComponentFixture<EditarCentroVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCentroVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCentroVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
