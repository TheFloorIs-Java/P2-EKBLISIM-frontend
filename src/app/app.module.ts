import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { PackageComponent } from './components/package/package.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth/auth.guard';
import { TravelServiceService } from './service/travel-service.service';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';
import { ShowMyCartComponent } from './components/show-my-cart/show-my-cart.component';
import { AllPackagesComponent } from './pages/all-packages/all-packages.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PackageComponent,
    AdminloginComponent,
    PackageCardComponent,
    AddToCartButtonComponent,
    ShowMyCartComponent,
    AllPackagesComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [AuthGuard, TravelServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
