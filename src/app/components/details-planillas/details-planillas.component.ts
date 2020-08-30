import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { WorkersInterface } from '../../models/workers';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-planillas',
  templateUrl: './details-planillas.component.html',
  styleUrls: ['./details-planillas.component.css']
})
export class DetailsPlanillasComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  public Worker: WorkersInterface = {};

  ngOnInit() {
    const idWorker = this.route.snapshot.params['id'];
    this.getDetails(idWorker);
  }

  getDetails(idWorker: string) : void{
    //this.dataApi.getOneWorker(idWorker).subscribe( Worker =>{
    //  this.Worker = Worker;
    //} );
  }

  calcularRenta(Sueldo){
    let renta = '';


    if(Sueldo > 0 && Sueldo <= 472){
      renta = '0%';
    } else if(Sueldo > 472 && Sueldo <= 895.24){
      renta = '10% + $17.67' ;
    } else if(Sueldo > 895.24 && Sueldo <= 2038.10){
      renta = '20% + $60';
    }else if(Sueldo > 2038.10){
      renta = '30% + $288.57' ;
    }

    return renta;
  }

  calcularSueldo(Sueldo, Bonificacion, Tarde, Ausencia){
    let Afp = Sueldo * 0.0725;
    let Isss = Sueldo * 0.03;
    let d_Tarde = Tarde * 5;
    let dia = Sueldo / 30;
    let d_Ausencia = Ausencia * dia; 
    let renta = 0;

    Sueldo = Sueldo - d_Tarde - d_Ausencia;

    console.log(Sueldo);

    if(Sueldo > 0 && Sueldo <= 472){
      renta = 0;
    } else if(Sueldo > 472 && Sueldo <= 895.24){
      renta = (Sueldo * 0.10) + 17.67 ;
    } else if(Sueldo > 895.24 && Sueldo <= 2038.10){
      renta = (Sueldo * 0.20) + 60 ;
    }else if(Sueldo > 2038.10){
      renta = (Sueldo * 0.30) + 288.57 ;
    }

    let sueldo_final = Sueldo - Afp - Isss - renta;

    let sueldoo = sueldo_final + Bonificacion;

    return sueldoo;


  }


  calcularSueldoMes(Sueldo){
    let Afp = Sueldo * 0.0725;
    let Isss = Sueldo * 0.03;

    let renta = 0;

    console.log(Sueldo);

    if(Sueldo > 0 && Sueldo <= 472){
      renta = 0;
    } else if(Sueldo > 472 && Sueldo <= 895.24){
      renta = (Sueldo * 0.10) + 17.67 ;
    } else if(Sueldo > 895.24 && Sueldo <= 2038.10){
      renta = (Sueldo * 0.20) + 60 ;
    }else if(Sueldo > 2038.10){
      renta = (Sueldo * 0.30) + 288.57 ;
    }

    let sueldo_final = Sueldo - Afp - Isss - renta;

    return sueldo_final;


  }

}
