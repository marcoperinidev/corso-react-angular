import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroDettagliComponent } from './libro-dettagli.component';

describe('LibroDettagliComponent', () => {
  let component: LibroDettagliComponent;
  let fixture: ComponentFixture<LibroDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
