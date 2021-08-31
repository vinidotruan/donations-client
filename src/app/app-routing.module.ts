import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ActionsComponent, data: { animation: 'HomePage'} },
  { path: 'home', component: ActionsComponent, data: { animation: 'HomePage'} },
  { path: 'profile', component: ProfileComponent, data: { animation: 'ProfilePage'}},
  { path: 'form', component: ProfileComponent, data: { animation: 'FormPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
