import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';
import {HomeLayoutComponent} from './common/layout/homelayout';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  
  {
    path:'',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'call', loadChildren: () => import('./modules/call/call.module').then(m => m.CallModule) },
      { path: 'members', loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule) },
      { path: 'patients', loadChildren: () => import('./modules/patients/patients.module').then(m => m.PatientsModule) },
      { path: 'hospitals', loadChildren: () => import('./modules/hospitals/hospitals.module').then(m => m.HospitalsModule) },
      { path: 'organizations', loadChildren: () => import('./modules/organizations/organizations.module').then(m => m.OrganizationsModule) },
      { path: 'message-log', loadChildren: () => import('./modules/message-log/message-log.module').then(m => m.MessageLogModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
