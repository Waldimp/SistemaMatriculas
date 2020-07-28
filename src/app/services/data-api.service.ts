import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { WorkersInterface } from '../models/workers';
import { Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.WorkersCollection = afs.collection<WorkersInterface>('Estudiantes');
    this.Workers = this.WorkersCollection.valueChanges();
   }

  private WorkersCollection: AngularFirestoreCollection<WorkersInterface>;
  private Workers: Observable<WorkersInterface[]>;
  private workerDoc: AngularFirestoreDocument<WorkersInterface>;
  private Worker: Observable<WorkersInterface>;

  public selectedWorker: WorkersInterface = {
    id: null
  };

  getAllWorkers(){
    return this.Workers = this.WorkersCollection.snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(action =>{
        const data = action.payload.doc.data() as WorkersInterface;
        data.id = action.payload.doc.id;
        return data;
      })
    }))
   }

   getOneWorker(idWorker: string){
    this.workerDoc = this.afs.doc<WorkersInterface>(`Estudiantes/${idWorker}`);
    return this.Worker = this.workerDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists === false){
        return null;
      } else {
        const data = action.payload.data() as WorkersInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
   }

  addWorker(Worker: WorkersInterface):void {
    this.WorkersCollection.add(Worker);
  }

  updateWorker(Worker: WorkersInterface):void {
    let idWorker = Worker.id;
    this.workerDoc = this.afs.doc<WorkersInterface>(`Estudiantes/${idWorker}`);
    this.workerDoc.update(Worker);
  }

  deleteWorker(idWorker: string):void {
    this.workerDoc = this.afs.doc<WorkersInterface>(`Estudiantes/${idWorker}`);
    this.workerDoc.delete();
  }


}
