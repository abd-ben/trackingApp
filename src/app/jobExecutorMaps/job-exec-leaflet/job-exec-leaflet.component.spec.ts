import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExecLeafletComponent } from './job-exec-leaflet.component';

describe('JobExecLeafletComponent', () => {
  let component: JobExecLeafletComponent;
  let fixture: ComponentFixture<JobExecLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExecLeafletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExecLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
