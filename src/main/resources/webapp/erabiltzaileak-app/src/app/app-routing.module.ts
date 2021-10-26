import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddErabiltzaileComponent} from "./erabiltzaile/add-erabiltzaile/add-erabiltzaile.component";

const routes: Routes = [
  {path: 'list-erabiltzaileak', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-erabiltzaile', component: AddErabiltzaileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
