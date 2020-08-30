import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../cargar-scripts.service';

import { DataApiService } from '../services/data-api.service';
import { WorkersInterface } from '../models/workers';
import { NgForm } from '@angular/forms';

import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute) {
    _CargaScripts.Carga(["script"]);
    _CargaScripts.Carga(["jquery.min"]);
   }

  ngOnInit() {
    const idGradoS = this.route.snapshot.params['id'];

    var gradoSelec = idGradoS.split('-')[0];

    var seccionSelec = idGradoS.split('-')[1];

  }

  onSaveWorker(workerForm : NgForm):void{

    const idGrado = this.route.snapshot.params['id'];
    var guardar = "Estudiantes/" + idGrado.split('-')[0] + "/Seccion" + idGrado.split('-')[1] ;
    
    console.log(workerForm.value.id);

    if(workerForm.value.id == null){
      this.dataApi.addWorker(workerForm.value, guardar); //nuevo trabajador
    } else{
      
      this.dataApi.updateWorker(workerForm.value); //editar trabajador
    }

    workerForm.resetForm();

  }


}
