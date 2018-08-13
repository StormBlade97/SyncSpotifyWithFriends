import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongArtComponent } from './song-art.component';

describe('SongArtComponent', () => {
  let component: SongArtComponent;
  let fixture: ComponentFixture<SongArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
