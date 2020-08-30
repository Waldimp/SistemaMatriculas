import { Component, OnInit } from '@angular/core';

import {CargarScriptsService} from '../../../cargar-scripts.service';
import {DataApiService} from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers'; 
import { NgForm } from '@angular/forms';

import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-list-grados-admin',
  templateUrl: './list-grados-admin.component.html',
  styleUrls: ['./list-grados-admin.component.css']
})
export class ListGradosAdminComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute) { 
    _CargaScripts.Carga(["tablas"]);
  }

  public Workers = [];
  public Worker = ''; 

  ngOnInit() {
    this.getListWorkers();

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
