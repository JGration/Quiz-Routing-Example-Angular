import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao2Component } from './questao2.component';

describe('Questao2Component', () => {
  let component: Questao2Component;
  let fixture: ComponentFixture<Questao2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questao2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
