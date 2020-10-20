import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../../cargar-scripts.service';
import {DataApiService} from '../../../services/data-api.service';
import { WorkersInterface } from '../../../models/workers'; 
import { NgForm } from '@angular/forms';

import {ActivatedRoute, Params} from '@angular/router';

import {AuthService} from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute, private authService: AuthService) { 
    _CargaScripts.Carga(["tablas"]);
    _CargaScripts.Carga(["tablaExcel"]);


  }

  sourceNames = {"0": 'Por revisar pago y datos', "1": 'Confirmado Datos - Falta Pago', "2": 'Confirmado Pago - Falta Dato', "3": 'Completado' };

  public Workers = [];
  public Worker = ''; 

  public Pruebas = [];

  public isAdmin: any = null;

  public userUid: string = null;

  public guardar;


  ngOnInit() {
    this.getListWorkers();
    this.getCurrentUser();

    

    jQuery('#aceptar').click(function(e){

      e.preventDefault();

      console.log(this.isAdmin);
  
      alert("Tabla aceptada");
      var xd = document.getElementsByTagName('table')[1];
  
      var tabla = xd;
      var columna = 4;
      var num_colum_a_insertar = 0;



        /** Esta funcion inserta una columna html despues de una columna seleccionada 
         * tabla = la tabla que modificamos
         * columna = es el indice de la columna en donde insertaremos una nueva columna
         * num_colum_a_insertar = cuantas columnas se van a insertar despues de la columna seleccionada
         */
        jQuery(tabla).find('tr').each(function(i:number,row){ // recorremos todas sus rows
            var primer_td= jQuery(row).find('td,th')[columna]; // obtenemos  columna (por que insertaremos despues de esta)
            if(primer_td.tagName=='TH'){
                for(var i =0;i<=num_colum_a_insertar;i++){
                    //insertamos una cabecera despues de la primera cabecera
                    jQuery('<th></th>').insertAfter(primer_td);
                }
            }else{
                for(var i=0;i<=num_colum_a_insertar;i++){
                    //insertamos un valor despues del primer valor de la primera columna
                    jQuery('<td class="contenn"><a class="boton" onclick="hola(this.tagName)">Confirmar pago</a></td>').insertAfter(primer_td);
                }
            }
        });
      
  
    });


    jQuery("#ok").click(function() {
      var valores = "";

      var cont = 0;

      var prub = [];

      jQuery(".contenn").parent("tr").find("td").each(function() {
          if(jQuery(this).html() != "coger valores de la fila"){
              if(cont % 6 == 0){
                valores = jQuery(this).html() + " ";
                //alert(valores);

                prub.push(valores);

                
              }    
              cont++;
          }
      });
      
      valores = valores + "\n";

      console.log(prub);

      for(var i = 1; i < prub.length; i++){
        jQuery("#" + prub[i] ).click();
      }

      


    });


    
  }

  editar(worker: WorkersInterface){
    

    var guardId = this.guardar + "/" + worker.id;

    if(worker.confirmDatos == "1"){
      worker.confirmDatos = "3";
    }else if(worker.confirmDatos == "0"){
      worker.confirmDatos = "2";
    }

    this.dataApi.updateWorkerxd(worker, guardId); 

  }

  

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => {
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
        })
      }
    })
  }

  


  getListWorkers(){

    var idGrado = this.route.snapshot.params['id'];

    idGrado = this.capitalize(idGrado);

    this.guardar = "Estudiantes/" + idGrado.split('S')[0] + "/Seccion" + idGrado.split('n')[1] ;

    this.dataApi.getAllWorkers(this.guardar).subscribe( Workers => {
      this.Workers = Workers;

      
    });

    

  }

  prueba(worker: WorkersInterface){
    console.log(worker);
  }

  onDeleteWorker(idWorker: string){

    var guardId = this.guardar + "/" + idWorker;

    const confirmacion = confirm('Estas seguro de eliminar?' );

    if (confirmacion){
      this.dataApi.deleteWorker(idWorker, guardId);
    }
    
  }

  onPreUpdateWorker(worker: WorkersInterface){
    console.log('worker', worker);
    this.dataApi.selectedWorker = Object.assign({}, worker); //guarda los datos en un objeto
  }

  capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  

}
