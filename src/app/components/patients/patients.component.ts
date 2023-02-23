import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'med-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Observable<any> | undefined;
  patientsCollection: AngularFirestoreCollection<'Patients'> | undefined;
  
  constructor(public firestore: AngularFirestore) { }

  ngOnInit(): void { 
    this.currentPatients();
  }

  currentPatients() {
    this.patientsCollection = this.firestore.collection('Patients');
    this.patients = this.patientsCollection.valueChanges();
  }

  }
