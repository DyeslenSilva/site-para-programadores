import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasEmpregoComponent } from './vagas-emprego.component';

describe('VagasEmpregoComponent', () => {
  let component: VagasEmpregoComponent;
  let fixture: ComponentFixture<VagasEmpregoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasEmpregoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasEmpregoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
