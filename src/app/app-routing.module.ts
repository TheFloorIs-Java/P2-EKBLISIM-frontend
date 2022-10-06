import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllPackagesComponent } from './pages/all-packages/all-packages.component';
// import { PackageComponent } from './components/package/package.component';
// import { PackageCardComponent } from './components/package-card/package-card.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ShowMyCartComponent } from './components/show-my-cart/show-my-cart.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminGuard } from './admin/admin.guard';
import { RegsuccessComponent } from './pages/register/regsuccess/regsuccess.component';
import { AddsuccessGuard } from './pages/register/addsuccess.guard';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'login', redirectTo: '/' },
  { path: 'adminlogin', component: AdminloginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'packages', component: AllPackagesComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: ShoppingCartComponent },
  // { path: 'packages', component: PackageComponent },
  // {
  //   path: 'packages',
  //   component: PackageCardComponent,
  // },
  { path: 'packages', component: AddToCartButtonComponent },
  { path: 'packages', component: ShowMyCartComponent },
  { path: 'adminportal', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'regsuccess', component: RegsuccessComponent, canActivate: [AddsuccessGuard]},
  { path: 'payments', component: PaymentPageComponent}
];
// canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
