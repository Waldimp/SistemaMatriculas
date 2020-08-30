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

  ngOnInit() {

    var idWorker = this.route.snapshot.params['id'];

    var guardar = "Estudiantes/" + idWorker.split('-')[0] + "/Seccion" + idWorker.split('-')[1] ;

    var id = idWorker.split('-')[2];

    this.getDetails(id, guardar);
  }

  getDetails(idWorker: string, guardar: string) : void{
    this.dataApi.getOneWorker(idWorker, guardar).subscribe( Worker =>{
      this.Student = Worker;
    } );
  }

}
