import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { RegisterComponent } from './pages/register/register.component';
import { PackageComponent } from './components/package/package.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'packages', component: PackageComponent, canActivate: [AuthGuard] },
  { path: 'adminportal', component: AdminComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
