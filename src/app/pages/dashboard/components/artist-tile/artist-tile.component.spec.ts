import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTileComponent } from './artist-tile.component';

describe('ArtistTileComponent', () => {
  let component: ArtistTileComponent;
  let fixture: ComponentFixture<ArtistTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
