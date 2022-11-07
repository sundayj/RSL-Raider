import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampCollectionComponent } from './champ-collection.component';

describe('ChampCollectionComponent', () => {
  let component: ChampCollectionComponent;
  let fixture: ComponentFixture<ChampCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
