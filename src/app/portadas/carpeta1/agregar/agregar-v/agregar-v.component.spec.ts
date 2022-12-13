import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVComponent } from './agregar-v.component';

describe('AgregarVComponent', () => {
  let component: AgregarVComponent;
  let fixture: ComponentFixture<AgregarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
