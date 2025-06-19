import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { TareaComponent } from './tarea.component';

describe('TareaComponent', () => {
  let component: TareaComponent;
  let fixture: ComponentFixture<TareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaComponent, CommonModule, FormsModule] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task to the list', () => {
    component.nuevaTarea = 'Nueva tarea';
    component.agregarTarea();
    expect(component.tareas).toContain('Nueva tarea');
  });
});