import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivDetailComponent } from './archiv-detail.component';

describe('ArchivDetailComponent', () => {
  let component: ArchivDetailComponent;
  let fixture: ComponentFixture<ArchivDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
