import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientInfo } from '../family-members/patientInfo.model';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',

  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  getPatient: any = [];
  p = new Patient();
  patientInfo = new PatientInfo()
  patientName = "patientName";
  isSave: boolean = true;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute
  ) {

  }

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
    }, err => {
      console.log("load failed");
    })
  }

  getFamilyMembers() {
    this.router.navigate(['/showFamilyMembers'], { queryParams: { patientId: this.p.id } }
    )

  }



  editPatient(item: any) {
    console.log(item);

    this.p.id = item.id;
    this.p.patientName = item.patientName;
    this.p.gender = item.gender;
    this.p.age = item.age;
    this.p.dob = item.dob;
    this.p.phonNo = item.phonNo;
    this.p.email = item.email;
    this.p.address = item.address;
    this.p.photosUri = item.photosUri;
    this.router.navigate(['/patient'], { state: { patient: item, isSave: false } })


    console.log(this.p)
  }

  deletePatient(patient: any) {
    if (confirm("Are you sure to delete")) {
      const headers = { 'content-Type': 'application/json' };
      this.http.get("http://localhost:9091/deletePatient/" + patient.id, { headers: headers })
        .subscribe(data => {
          this.getAllPatient();
          this.toastr.warning("Patient delete");
        })
    }

  }
}








