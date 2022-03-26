import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',

  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  getPatient: any = [];
  patient: Patient = new Patient();
  patientName = "patientName";
  isSave: boolean = true;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getAllPatient();
  }

  getAllPatient() {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9091/getAllPatient', { headers: header }).subscribe((res) => {
      //console.log(res);
      this.getPatient = res;
      console.log(this.getPatient);
    }, err => {
      console.log("load failed");
    })
  }



  editEmployee(patient: any) {
    this.patient.id = patient.id;
    this.patient.patientName = patient.patientName;
    this.patient.gender = patient.gender;
    this.patient.age = patient.age;
    this.patient.dob = patient.dob;
    this.patient.phonNo = patient.phonNo;
    this.patient.email = patient.email;
    this.patient.address = patient.address;
    this.patient.photos = patient.photos;
    this.router.navigate(['/patient'], { state: { patient: patient, isSave: false } })
  }

  deletePatient(patient: any) {
    if (confirm("Are you sure to delete")) {     
      const headers = { 'content-Type': 'application/json' };
      this.http.get("http://localhost:9091/deletePatient/" + patient.id, { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.getAllPatient();
          this.toastr.warning("Patient delete");
        })
    }

  }
}








