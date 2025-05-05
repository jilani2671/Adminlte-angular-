import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeadsComponent } from './components/leads/leads.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
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
