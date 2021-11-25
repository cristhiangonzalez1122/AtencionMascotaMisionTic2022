import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsultaComponent } from './crear-consulta.component';

describe('CrearConsultaComponent', () => {
  let component: CrearConsultaComponent;
  let fixture: ComponentFixture<CrearConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
