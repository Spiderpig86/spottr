import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTileComponent } from './song-tile.component';

describe('SongTileComponent', () => {
  let component: SongTileComponent;
  let fixture: ComponentFixture<SongTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
