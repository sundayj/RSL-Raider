import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidCollectionComponent } from './raid-collection.component';

describe('RaidCollectionComponent', () => {
  let component: RaidCollectionComponent;
  let fixture: ComponentFixture<RaidCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
