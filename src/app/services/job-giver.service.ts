import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
//import { Jobgiver } from 'src/app/module_table/table';
//import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';
import { Datatype } from 'src/app/datatype.model';

@Injectable({
  providedIn: 'root'
})
export class JobGiverService {

  //dataset : Observable <Datatype[]>;

  constructor(private firestore: AngularFirestore) { }
  
  getData(){
    return this.firestore.collection('datas').snapshotChanges();
  }

 /* this.dataset = this.firestore.collection('Datatype').valueChanges().map( changes =>{
    return changes.map( a=>{
      const data = a.payload.doc.data() as Datatype;
      data.idd = a.payload.doc.idd;
      data.title = a.payload.doc.title;
      data.fee = a.payload.doc.fee;
    });
  });
}
  /*constructor( private http:HttpClient) { }

  readonly APIUrl = "http://localhost:49902/api/table";

  getDepList(): Observable<Jobgiver[]>{
    return this.http.get<Jobgiver[]>(this.APIUrl + '/table');
  }*/

}

export interface Datatype{
  idd: string;
  title: string;
  fee: string;
}
