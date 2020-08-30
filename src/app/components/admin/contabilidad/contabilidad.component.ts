import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html',
  styleUrls: ['./contabilidad.component.css']
})
export class ContabilidadComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public Workers = [];
  public Worker = '';

  ngOnInit() {
    this.getListWorkers();
  }

  getListWorkers(){
    //this.dataApi.getAllWorkers().subscribe( Workers => {
    //  this.Workers = Workers;
    //});
  }


  onPreUpdateWorker(worker: WorkersInterface){
    console.log('worker', worker);
    this.dataApi.selectedWorker = Object.assign({}, worker); //guarda los datos en un objeto
  }

}
