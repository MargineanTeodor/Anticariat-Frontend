import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartiListComponent } from './carti-list/carti-list.component';
import { CreateCarteComponent } from './create-carte/create-carte.component';
import { UpdateCarteComponent } from './update-carte/update-carte.component';
import { CarteDetailsComponent } from './carte-details/carte-details.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegisterComponent } from './register/register.component';
import { ListaCartiNumeComponent } from './lista-carti-nume/lista-carti-nume.component';
import { ListaCartiAutorComponent } from './lista-carti-autor/lista-carti-autor.component';

const routes: Routes = [
  {path:'carti',component: CartiListComponent},
  {path:'create-carte',component: CreateCarteComponent},
  {path:'update-carte/:id',component: UpdateCarteComponent},
  {path:'carte-details/:id', component: CarteDetailsComponent},
  {path:'admin-page', component: AdminPageComponent},
  {path:"login", component: LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"carti-nume",component:ListaCartiNumeComponent},
  {path:"carti-autor",component: ListaCartiAutorComponent},
  {path:'', redirectTo: 'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
