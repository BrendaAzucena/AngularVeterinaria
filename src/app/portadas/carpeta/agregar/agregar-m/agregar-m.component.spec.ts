import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMComponent } from './agregar-m.component';

describe('AgregarMComponent', () => {
  let component: AgregarMComponent;
  let fixture: ComponentFixture<AgregarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
