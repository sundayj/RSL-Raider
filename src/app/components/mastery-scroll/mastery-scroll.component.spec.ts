import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryScrollComponent } from './mastery-scroll.component';

describe('MasteryScrollComponent', () => {
  let component: MasteryScrollComponent;
  let fixture: ComponentFixture<MasteryScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteryScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasteryScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
