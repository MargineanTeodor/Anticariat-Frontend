import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartiListComponent } from './carti-list/carti-list.component';
import { CreateCarteComponent } from './create-carte/create-carte.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';
import { CarteDetailsComponent } from './carte-details/carte-details.component';

const routes: Routes = [
  {path:'carti',component: CartiListComponent},
  {path:'create-carte',component: CreateCarteComponent},
  {path:'update-carte/:id',component: UpdateCarteComponent},
  {path:'carte-details/:id', component: CarteDetailsComponent},
  {path:'', redirectTo: 'carti',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
