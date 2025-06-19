import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebamisaComponent } from './pruebamisa.component';

describe('PruebamisaComponent', () => {
  let component: PruebamisaComponent;
  let fixture: ComponentFixture<PruebamisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebamisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebamisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
