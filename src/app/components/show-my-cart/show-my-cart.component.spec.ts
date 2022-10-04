import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyCartComponent } from './show-my-cart.component';

describe('ShowMyCartComponent', () => {
  let component: ShowMyCartComponent;
  let fixture: ComponentFixture<ShowMyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
