import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicinaComponent } from './editar-medicina.component';

describe('EditarMedicinaComponent', () => {
  let component: EditarMedicinaComponent;
  let fixture: ComponentFixture<EditarMedicinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMedicinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
