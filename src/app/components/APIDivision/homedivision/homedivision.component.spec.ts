import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedivisionComponent } from './homedivision.component';

describe('HomedivisionComponent', () => {
  let component: HomedivisionComponent;
  let fixture: ComponentFixture<HomedivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
