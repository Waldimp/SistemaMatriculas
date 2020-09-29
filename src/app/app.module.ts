import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicio para Importar Scripts externos
import {CargarScriptsService} from './cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListWorkersComponent } from './components/admin/list-workers/list-workers.component';
import { DetailsWorkersComponent } from './components/admin/details-workers/details-workers.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { HeroComponent } from './components/hero/hero.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFirestore} from '@angular/fire/firestore';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ContabilidadComponent } from './components/admin/contabilidad/contabilidad.component';
import { DetailsPlanillasComponent } from './components/details-planillas/details-planillas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetailsStudentComponent } from './components/details-student/details-student.component';
import { ListStudentsComponent } from './components/admin/list-students/list-students.component';
import { ListGradosComponent } from './components/list-grados/list-grados.component';
import { FirstYearComponent } from './bach/first-year/first-year.component';
import { SecondYearComponent } from './bach/second-year/second-year.component';
import { ThirdYearComponent } from './bach/third-year/third-year.component';
import { EditarEstudianteComponent } from './components/admin/editar-estudiante/editar-estudiante.component';
import { ListGradosAdminComponent } from './components/admin/list-grados-admin/list-grados-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { ValidarnpeComponent } from './components/validarnpe/validarnpe.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListWorkersComponent,
    DetailsWorkersComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HeroComponent,
    Page404Component,
    DetailsBookComponent,
    ContabilidadComponent,
    DetailsPlanillasComponent,
    FormularioComponent,
    InicioComponent,
    DetailsStudentComponent,
    ListStudentsComponent,
    ListGradosComponent,
    FirstYearComponent,
    SecondYearComponent,
    ThirdYearComponent,
    EditarEstudianteComponent,
    ListGradosAdminComponent,
    DashboardAdminComponent,
    ValidarnpeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore, CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
