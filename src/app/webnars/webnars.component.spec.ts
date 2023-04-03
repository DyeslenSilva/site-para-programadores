import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebnarsComponent } from './webnars.component';

describe('WebnarsComponent', () => {
  let component: WebnarsComponent;
  let fixture: ComponentFixture<WebnarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebnarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebnarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
