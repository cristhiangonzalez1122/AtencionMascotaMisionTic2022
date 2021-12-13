import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCentroVetComponent } from './crear-centro-vet.component';

describe('CrearCentroVetComponent', () => {
  let component: CrearCentroVetComponent;
  let fixture: ComponentFixture<CrearCentroVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCentroVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCentroVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
