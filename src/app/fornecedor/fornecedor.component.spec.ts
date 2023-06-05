import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fornecedorComponent } from './fornecedor.component';

describe('ClientsComponent', () => {
  let component: fornecedorComponent;
  let fixture: ComponentFixture<fornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ fornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(fornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});