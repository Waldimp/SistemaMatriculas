import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { WorkersInterface } from '../../models/workers';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  meses:string[]=["enero","febrero","marzo", "abril","mayo","junio","julio", "agosto","septiembre","octubre","noviembre", "diciembre"];

  ngOnInit() {
  }

  avermes(mes, i){
    return mes;
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
