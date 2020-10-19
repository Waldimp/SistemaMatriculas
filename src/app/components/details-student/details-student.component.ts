import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../cargar-scripts.service';

import { DataApiService } from '../../services/data-api.service';
import { WorkersInterface } from '../../models/workers';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute) { 
    _CargaScripts.Carga(["script"]);
    _CargaScripts.Carga(["jquery.min"]);
  }

  public Student: WorkersInterface = {};

  public guardar;

  public id;


  ngOnInit() {

    var idWorker = this.route.snapshot.params['id'];

    this.guardar = "Estudiantes/" + idWorker.split('-')[0] + "/Seccion" + idWorker.split('-')[1] ;

    this.id = idWorker.split('-')[2];

    this.getDetails(this.id, this.guardar);

    
    
  }

  prueba(worker: WorkersInterface){

    var guardId = this.guardar + "/" + this.id;

    if(worker.confirmDatos == "2"){
      worker.confirmDatos = "3";
    }else if(worker.confirmDatos == "0"){
      worker.confirmDatos = "1";
    }


    this.dataApi.updateWorkerxd(worker, guardId); //editar trabajador
  }

  getDetails(idWorker: string, guardar: string) : void{
    this.dataApi.getOneWorker(idWorker, guardar).subscribe( Worker =>{
      this.Student = Worker;
    } );
  }



}
