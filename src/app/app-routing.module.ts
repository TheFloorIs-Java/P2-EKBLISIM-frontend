import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { RegisterComponent } from './pages/register/register.component';
import { PackageComponent } from './components/package/package.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'packages', component: PackageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
