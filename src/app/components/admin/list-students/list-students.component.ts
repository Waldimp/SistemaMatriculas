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
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute, private authService: AuthService) { 
    _CargaScripts.Carga(["tablas"]);
  }

  sourceNames = {0: 'Por revisar', 1: 'Confirmado', '': 'Pendiente' };

  public Workers = [];
  public Worker = ''; 

  public isAdmin: any = null;

  public userUid: string = null;

  public guardar;

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

    var idGrado = this.route.snapshot.params['id'];

    idGrado = this.capitalize(idGrado);

    this.guardar = "Estudiantes/" + idGrado.split('S')[0] + "/Seccion" + idGrado.split('n')[1] ;

    this.dataApi.getAllWorkers(this.guardar).subscribe( Workers => {
      this.Workers = Workers;
    });

  }

  prueba(worker: WorkersInterface){
    console.log(worker);
  }

  onDeleteWorker(idWorker: string){

    var guardId = this.guardar + "/" + idWorker;

    const confirmacion = confirm('Estas seguro de eliminar?' );

    if (confirmacion){
      this.dataApi.deleteWorker(idWorker, guardId);
    }
    
  }

  onPreUpdateWorker(worker: WorkersInterface){
    console.log('worker', worker);
    this.dataApi.selectedWorker = Object.assign({}, worker); //guarda los datos en un objeto
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

}
