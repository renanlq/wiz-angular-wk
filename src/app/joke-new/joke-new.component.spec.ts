import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeNewComponent } from './joke-new.component';

describe('JokeNewComponent', () => {
  let component: JokeNewComponent;
  let fixture: ComponentFixture<JokeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
