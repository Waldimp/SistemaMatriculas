import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../../../cargar-scripts.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private _CargaScripts:CargarScriptsService) { 
    _CargaScripts.Carga(["scriptFormMatricula"]);
  }

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  onLogin() : void{
    
    this.authService.loginEmailUser(this.email, this.password)
    .then( (res)=>{
      this.onLoginRedirect();
    }).catch( err => console.log('err', err.message));
  }

  onLogout(){
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['users/formulario']);
  }

  onLoginAdmin() : void{
    
    this.authService.loginEmailUser(this.email, this.password)
    .then( (res)=>{
      this.onLoginRedirectAdmin();
    }).catch( err => console.log('err', err.message));
  }

  onLoginRedirectAdmin(): void{
    this.router.navigate(['admin/list-students']);
  }

}
