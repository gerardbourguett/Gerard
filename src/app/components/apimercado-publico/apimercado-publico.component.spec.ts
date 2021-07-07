import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIMercadoPublicoComponent } from './apimercado-publico.component';

describe('APIMercadoPublicoComponent', () => {
  let component: APIMercadoPublicoComponent;
  let fixture: ComponentFixture<APIMercadoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIMercadoPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIMercadoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
