import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReactLoginRoutingModule } from './react-login-routing.module';
import { LoginformComponent } from './components/loginform/loginform.component';
import { LoginAuthService } from './services/login-auth.service';
import { LoginAuthGuard } from './services/login-auth.guard';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    LoginformComponent,
    RegisterFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    ReactLoginRoutingModule,
    BrowserModule,
  ],
  providers: [LoginAuthService, LoginAuthGuard]
})
export class ReactLoginModule { }
