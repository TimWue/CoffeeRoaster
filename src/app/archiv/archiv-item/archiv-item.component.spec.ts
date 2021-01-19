import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivItemComponent } from './archiv-item.component';

describe('ArchivItemComponent', () => {
  let component: ArchivItemComponent;
  let fixture: ComponentFixture<ArchivItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
