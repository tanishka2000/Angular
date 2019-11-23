import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { JobGiver } from './job-giver.model';

@Injectable({
  providedIn: 'root'
})
export class JobGiverService {
  formData: JobGiver;

  constructor(private firestore: AngularFirestore) { }

  getData() {
    console.log("this.firestore.collection('datas').snapshotChanges():: ", this.firestore.collection('employees').snapshotChanges())
    return this.firestore.collection('datas').snapshotChanges();
  }
}