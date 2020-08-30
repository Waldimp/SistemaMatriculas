import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../../cargar-scripts.service';

import { DataApiService } from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers';
import { NgForm } from '@angular/forms';

import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute) {
    _CargaScripts.Carga(["script"]);
    _CargaScripts.Carga(["jquery.min"]);
  }

  public Student: WorkersInterface = {};

  ngOnInit() {

    const idWorker = this.route.snapshot.params['id'];
    var guardarxd = "Estudiantes/" + idWorker.split('-')[0] + "/Seccion" + idWorker.split('-')[1] ;
    var id = idWorker.split('-')[2];

    this.getDetails(id, guardarxd);

    console.log(idWorker);

  }

  getDetails(idWorker: string, guardarxd: string) : void{
    this.dataApi.getOneWorker(idWorker, guardarxd).subscribe( Worker =>{
      this.Student = Worker;
    } );
  }



  onSaveWorker(workerForm : NgForm):void{

    const idGrado = this.route.snapshot.params['id'];
    var guardar = "Estudiantes/" + idGrado.split('-')[0] + "/Seccion" + idGrado.split('-')[1] ;

    console.log(workerForm.value.id);

    if(workerForm.value.id == null){
      this.dataApi.addWorker(workerForm.value, guardar); //nuevo estudiante
    } else{
      
      this.dataApi.updateWorker(workerForm.value); //editar estudiante
    }

    workerForm.resetForm();

  }




}
