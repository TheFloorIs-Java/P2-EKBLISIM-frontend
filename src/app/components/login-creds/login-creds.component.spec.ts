import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCredsComponent } from './login-creds.component';

describe('LoginCredsComponent', () => {
  let component: LoginCredsComponent;
  let fixture: ComponentFixture<LoginCredsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCredsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
