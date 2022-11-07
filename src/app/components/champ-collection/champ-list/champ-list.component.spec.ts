import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampListComponent } from './champ-list.component';

describe('ChampListComponent', () => {
  let component: ChampListComponent;
  let fixture: ComponentFixture<ChampListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
