import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorComponent, CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter', () => {
    component.incrementar();
    expect(component.contador).toBe(1);
  });

  it('should decrement counter', () => {
    component.contador = 1;
    component.decrementar();
    expect(component.contador).toBe(0);
  });

  it('should not decrement below 0', () => {
    component.contador = 0;
    component.decrementar();
    expect(component.contador).toBe(0);
  });

  it('should reset counter to 0', () => {
    component.contador = 5;
    component.reiniciar();
    expect(component.contador).toBe(0);
  });
});