import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TododsComponent } from './todods.component';

describe('TododsComponent', () => {
  let component: TododsComponent;
  let fixture: ComponentFixture<TododsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TododsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TododsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
