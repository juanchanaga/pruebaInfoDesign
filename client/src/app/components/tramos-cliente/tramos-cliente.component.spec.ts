import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramosClienteComponent } from './tramos-cliente.component';

describe('TramosClienteComponent', () => {
  let component: TramosClienteComponent;
  let fixture: ComponentFixture<TramosClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramosClienteComponent]
    });
    fixture = TestBed.createComponent(TramosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
