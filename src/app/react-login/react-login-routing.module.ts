import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPackagesComponent } from '../pages/all-packages/all-packages.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { LoginAuthGuard } from './services/login-auth.guard';

const routes: Routes = [
  { path: 'special', component: LoginformComponent },
  { path: 'packages', component: AllPackagesComponent, canActivate: [LoginAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactLoginRoutingModule { }
