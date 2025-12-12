import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Privatetempelate } from './privatetempelate';

describe('Privatetempelate', () => {
  let component: Privatetempelate;
  let fixture: ComponentFixture<Privatetempelate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Privatetempelate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Privatetempelate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
