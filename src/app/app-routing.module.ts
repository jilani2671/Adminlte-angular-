import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeadsComponent } from './components/leads/leads.component';
// import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { BaseComponent } from './components/dashboard/base/base.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",            
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: BaseComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "leads",
        component: LeadsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
