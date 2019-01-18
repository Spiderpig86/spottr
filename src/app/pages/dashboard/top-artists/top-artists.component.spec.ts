import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtistsComponent } from './top-artists.component';

describe('TopArtistsComponent', () => {
  let component: TopArtistsComponent;
  let fixture: ComponentFixture<TopArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
