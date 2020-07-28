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

    const idWorker = this.route.snapshot.params['id'];
    this.getDetails(idWorker);
  }

  getDetails(idWorker: string) : void{
    this.dataApi.getOneWorker(idWorker).subscribe( Worker =>{
      this.Student = Worker;
    } );
  }

}
