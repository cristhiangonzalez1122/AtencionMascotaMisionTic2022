import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCentroVetComponent } from './eliminar-centro-vet.component';

describe('EliminarCentroVetComponent', () => {
  let component: EliminarCentroVetComponent;
  let fixture: ComponentFixture<EliminarCentroVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCentroVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCentroVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
