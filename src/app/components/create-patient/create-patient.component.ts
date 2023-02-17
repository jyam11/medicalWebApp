import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface patient { name: any };

@Component({
  selector: 'create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  constructor(private firestore: AngularFirestore) {}

  ngOnInIt(): void { }

  name: any;

  addPatient() {
    // collect my inputs
    const name: any = this.name;

    console.log(name);
    //send inputs
    const patient: patient={name}
    this.firestore.collection('Patients').doc(this.name).set(patient);
  }

  

}
