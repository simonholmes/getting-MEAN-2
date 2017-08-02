import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkComponent } from './framework.component';

describe('FrameworkComponent', () => {
  let component: FrameworkComponent;
  let fixture: ComponentFixture<FrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
