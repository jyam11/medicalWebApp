import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  firestoreCollection: AngularFirestoreCollection
  
  constructor(private angularFirestore: AngularFirestore) {
    this.firestoreCollection = angularFirestore.collection('Patients')
  }
  
  addPatient(name: string) {
    this.firestoreCollection.add({
      name,
    })
  }

  deletePatient(name: string) {
    this.firestoreCollection.doc(name).delete();
  }
}
