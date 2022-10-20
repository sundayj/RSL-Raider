import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionGuardiansComponent } from './faction-guardians.component';

describe('FactionGuardiansComponent', () => {
  let component: FactionGuardiansComponent;
  let fixture: ComponentFixture<FactionGuardiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactionGuardiansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactionGuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
