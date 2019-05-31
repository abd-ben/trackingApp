import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExecutorComponent } from './job-executor.component';

describe('JobExecutorComponent', () => {
  let component: JobExecutorComponent;
  let fixture: ComponentFixture<JobExecutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExecutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
