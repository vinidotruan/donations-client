import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionFormComponent } from './action-form/action-form.component';
import { ActionComponent } from './action/action.component';
import { ActionsComponent } from './actions/actions.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ActionsComponent,
    data: { animation: 'HomePage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: ActionsComponent,
    data: { animation: 'HomePage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'action/:id',
    component: ActionComponent,
    data: { animation: 'ProfilePage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { animation: 'ProfilePage' },
    canActivate: [AuthGuard],
  },
  {
    path: 'form',
    component: ActionFormComponent,
    data: { animation: 'FormPage' },
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
