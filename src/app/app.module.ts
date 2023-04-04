import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { IndexComponent } from './index/index.component';
import { CursosComponent } from './cursos/cursos.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { MobileComponent } from './mobile/mobile.component';
import { VagasEmpregoComponent } from './vagas-emprego/vagas-emprego.component';
import { WebnarsComponent } from './webnars/webnars.component';
import { PlanosComponent } from './planos/planos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    LoginCompComponent,
    CadastroComponentComponent,
    IndexComponent,
    CursosComponent,
    FrontendComponent,
    BackendComponent,
    MobileComponent,
    VagasEmpregoComponent,
    WebnarsComponent,
    PlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
