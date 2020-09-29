import { Component, Input, OnInit } from '@angular/core';
import {CargarScriptsService} from './../cargar-scripts.service';

import { DataApiService } from '../services/data-api.service';
import { WorkersInterface } from '../models/workers';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';

import {AuthService} from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../models/user';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable'; 


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(  private router:Router,private _CargaScripts:CargarScriptsService, private dataApi: DataApiService, private route: ActivatedRoute, private authService: AuthService, private storage: AngularFireStorage) {
    _CargaScripts.Carga(["script"]);
    _CargaScripts.Carga(["jquery.min"]);
   }

   uploadPercent: Observable<number>;
   urlImage: Observable<string>;

   public userUid: string = null;

  ngOnInit() {
    const idGradoS = this.route.snapshot.params['id'];

    var gradoSelec = idGradoS.split('-')[0];

    var seccionSelec = idGradoS.split('-')[1];

    this.getCurrentUser();

  }

  onUpload(e) {
    console.log('subir', e.target.files[0]); 
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `upload/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => {
      if(auth){
        this.userUid = auth.uid;
        
      }
    })
  }


  onSaveWorker(workerForm : NgForm):void{

    const idGrado = this.route.snapshot.params['id'];
    var guardar = "Estudiantes/" + idGrado.split('-')[0] + "/Seccion" + idGrado.split('-')[1] ;
    
    console.log(workerForm.value.id);

    workerForm.value.userUid = this.userUid;

    if(workerForm.value.id == null){
      this.dataApi.addWorker(workerForm.value, guardar); //nuevo trabajador
      this.onLogin();
    } else{
      this.dataApi.updateWorker(workerForm.value); //editar trabajador
    }

    workerForm.resetForm();

  }
  onLogin(): void{
    this.router.navigate(['users/validarnpe']);
  }

}
