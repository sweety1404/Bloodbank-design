import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbloodComponent } from './aboutblood.component';

describe('AboutbloodComponent', () => {
  let component: AboutbloodComponent;
  let fixture: ComponentFixture<AboutbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutbloodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
