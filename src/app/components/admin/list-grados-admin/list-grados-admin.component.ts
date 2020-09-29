import { Component, OnInit } from '@angular/core';

import {CargarScriptsService} from '../../../cargar-scripts.service';
import {DataApiService} from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers'; 
import { NgForm } from '@angular/forms';

import {ActivatedRoute, Params} from '@angular/router';

import {AuthService} from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-grados-admin',
  templateUrl: './list-grados-admin.component.html',
  styleUrls: ['./list-grados-admin.component.css']
})
export class ListGradosAdminComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute, private authService: AuthService ) { 
    _CargaScripts.Carga(["tablas"]);
  }

  public Workers = [];
  public Worker = ''; 

  public isAdmin: any = null;

  public userUid: string = null;

  ngOnInit() {
    this.getListWorkers();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => {
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
        })
      }
    })
  }

  getListWorkers(){

  const idGrado = this.route.snapshot.params['id'];

    this.dataApi.getAllWorkers("Grados/GradosBachillerato/" + idGrado).subscribe( Workers => {
      this.Workers = Workers;
    });
  }

  onDeleteWorker(idWorker: string){

    const confirmacion = confirm('Estas seguro de eliminar?');
    if (confirmacion){
      this.dataApi.deleteWorker(idWorker);
    }
    
  }

  onPreUpdateWorker(worker: WorkersInterface){
    console.log('worker', worker);
    this.dataApi.selectedWorker = Object.assign({}, worker); //guarda los datos en un objeto
  }

}
