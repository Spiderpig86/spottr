import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingsComponent } from './rankings.component';

describe('RankingsComponent', () => {
  let component: RankingsComponent;
  let fixture: ComponentFixture<RankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
