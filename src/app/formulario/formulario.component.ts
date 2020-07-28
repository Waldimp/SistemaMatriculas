import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from './../cargar-scripts.service';

import { DataApiService } from '../services/data-api.service';
import { WorkersInterface } from '../models/workers';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService, private dataApi: DataApiService) {
    _CargaScripts.Carga(["script"]);
    _CargaScripts.Carga(["jquery.min"]);
   }

  ngOnInit() {
  }

  onSaveWorker(workerForm : NgForm):void{

    console.log(workerForm.value.id);

    if(workerForm.value.id == null){
      this.dataApi.addWorker(workerForm.value); //nuevo trabajador
    } else{
      
      this.dataApi.updateWorker(workerForm.value); //editar trabajador
    }

    workerForm.resetForm();

  }


}
