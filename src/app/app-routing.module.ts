import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { IndexComponent } from './index/index.component';
import { CursosComponent } from './cursos/cursos.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';

const routes : Routes = [
  {path: 'login', component: LoginCompComponent},
  {path: 'cadastro', component: CadastroComponentComponent},
  {path: 'index', component: IndexComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'frontend', component: FrontendComponent},
  {path: 'backend', component: BackendComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
