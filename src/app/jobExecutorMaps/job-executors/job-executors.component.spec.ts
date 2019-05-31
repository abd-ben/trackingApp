import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExecutorsComponent } from './job-executors.component';

describe('JobExecutorsComponent', () => {
  let component: JobExecutorsComponent;
  let fixture: ComponentFixture<JobExecutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExecutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExecutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
