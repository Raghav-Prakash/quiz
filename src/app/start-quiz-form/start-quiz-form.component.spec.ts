import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuizFormComponent } from './start-quiz-form.component';

describe('StartQuizFormComponent', () => {
  let component: StartQuizFormComponent;
  let fixture: ComponentFixture<StartQuizFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartQuizFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
