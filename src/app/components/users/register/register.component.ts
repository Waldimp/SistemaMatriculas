import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {CargarScriptsService} from './../../../cargar-scripts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private _CargaScripts:CargarScriptsService) {
    _CargaScripts.Carga(["scriptFormMatricula"]);
   }

  public email:string = '';
  public password:string= '';

  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser( this.email, this.password )
    .then((res) =>{
      this.router.navigate(['admin/list-students']);
    }).catch(err => console.log('err', err.message));
  }

}
