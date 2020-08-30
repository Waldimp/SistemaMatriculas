import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers'; 
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list-workers',
  templateUrl: './list-workers.component.html',
  styleUrls: ['./list-workers.component.css']
})
export class ListWorkersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public Workers = [];
  public Worker = ''; 


  ngOnInit() {
    this.getListWorkers();
  }

  getListWorkers(){
    this.dataApi.getAllWorkers("xd").subscribe( Workers => {
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
