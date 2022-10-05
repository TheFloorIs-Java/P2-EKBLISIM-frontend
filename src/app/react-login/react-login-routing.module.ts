import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './components/loginform/loginform.component';

const routes: Routes = [
  { path: 'special', component: LoginformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactLoginRoutingModule { }
