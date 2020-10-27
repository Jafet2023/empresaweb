import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { NewempresaComponent } from './pages/newempresa/newempresa.component';
import { EditempresaComponent } from './pages/editempresa/editempresa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'newempresa', component: NewempresaComponent },
  { path: 'editempresa/:id', component: EditempresaComponent },
  { path: 'empresas/:id', component: EmpresasComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
