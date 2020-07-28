import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../../cargar-scripts.service';
import {DataApiService} from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService) { 
    _CargaScripts.Carga(["tablas"]);
  }

  public Workers = [];
  public Worker = ''; 

  ngOnInit() {
    this.getListWorkers();
  }

  getListWorkers(){
    this.dataApi.getAllWorkers().subscribe( Workers => {
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
