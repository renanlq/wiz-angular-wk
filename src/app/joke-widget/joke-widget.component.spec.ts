import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeWidgetComponent } from './joke-widget.component';

describe('JokeWidgetComponent', () => {
  let component: JokeWidgetComponent;
  let fixture: ComponentFixture<JokeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
