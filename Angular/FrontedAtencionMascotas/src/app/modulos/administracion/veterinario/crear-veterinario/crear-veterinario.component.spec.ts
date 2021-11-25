import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVeterinarioComponent } from './crear-veterinario.component';

describe('CrearVeterinarioComponent', () => {
  let component: CrearVeterinarioComponent;
  let fixture: ComponentFixture<CrearVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
