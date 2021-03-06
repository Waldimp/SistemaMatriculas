import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditarEstudianteComponent } from './components/admin/editar-estudiante/editar-estudiante.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ContabilidadComponent } from './components/admin/contabilidad/contabilidad.component';
import { DetailsPlanillasComponent } from './components/details-planillas/details-planillas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetailsStudentComponent } from './components/details-student/details-student.component';
import { ListStudentsComponent } from './components/admin/list-students/list-students.component';
import { ListGradosComponent } from './components/list-grados/list-grados.component';
import { FirstYearComponent } from './bach/first-year/first-year.component';
import { ThirdYearComponent } from './bach/third-year/third-year.component';
import { SecondYearComponent } from './bach/second-year/second-year.component';
import { ListGradosAdminComponent } from './components/admin/list-grados-admin/list-grados-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { ValidarnpeComponent } from './components/validarnpe/validarnpe.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'student/:id', component: DetailsStudentComponent //TO DO: Only user auth
  },
  {
    path: 'editar/:id', component: EditarEstudianteComponent //TO DO: Only user auth
  },
  {
    path: 'planilla/:id', component: DetailsPlanillasComponent //TO DO: Only user auth
  },
  {
    path: 'admin/list-gradosAdmin/:id', component: ListGradosAdminComponent //TO DO: Only user auth
  },
  {
    path: 'admin/list-students/:id', component: ListStudentsComponent //TO DO: Only user auth
  },
  {
    path: 'admin/dashboard', component: DashboardAdminComponent //TO DO: Only user auth
  },
  {
    path: 'users/list-gradosBach', component: ListGradosComponent //TO DO: Only user auth
  },
  {
    path: 'users/list-gradosBach/PrimerAño', component: FirstYearComponent //TO DO: Only user auth
  },
  {
    path: 'users/list-gradosBach/SegundoAño', component: SecondYearComponent //TO DO: Only user auth
  },
  {
    path: 'users/list-gradosBach/TercerAño', component: ThirdYearComponent //TO DO: Only user auth
  },
  {
    path: 'users/login', component: LoginComponent
  },
  {
    path: 'users/validarnpe', component: ValidarnpeComponent          
  },
  {
    path: 'users/register', component: RegisterComponent
  },
  {
    path: 'users/profile', component: ProfileComponent //TO DO: Only user auth
  },
  {
    path: 'users/formulario/:id', component: FormularioComponent //TO DO: Only user auth
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
