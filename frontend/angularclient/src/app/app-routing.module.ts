import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  { path: 'users', component: UserlistComponent },
  { path: 'adduser', component: UserformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
