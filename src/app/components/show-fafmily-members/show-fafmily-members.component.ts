import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientInfo } from '../family-members/patientInfo.model';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-show-fafmily-members',
  templateUrl: './show-fafmily-members.component.html',
  styleUrls: ['./show-fafmily-members.component.css']
})
export class ShowFafmilyMembersComponent implements OnInit {
  getData: any = [];
  patient = new Patient()
  patientinfo: PatientInfo = new PatientInfo();
  familyMemberName = "familyMemberName";
  isSave: boolean = true;

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params['patientId'] != undefined || params['patientId'] != null ){
    //     this.getInformationtById(params['patientId']);
    //   }
    // }
    this.activatedRoute.queryParams.subscribe(params => {
      // if (params['patientId'] != undefined || params['patientId'] != null) {

      // }   
      this.getInformationtById(params['patientId']);
      console.log("Hello");


    })


  }



  getInformationtById(patientId: number) {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9091/getInformationtById/' + patientId, { headers: header }).subscribe((res: any) => {
      console.log(res);
      this.patientinfo = res;
      console.log(this.patientinfo);

    }, err => {
      console.log("load failed");
    })
  }

  // getAllPatientFamilyMembers() {
  //   const header = {
  //     "Content-Type": "application/json"
  //   };
  //   this.http.get('http://localhost:9091/getAllfamilyMember', { headers: header }).subscribe((res) => {
  //     //console.log(res);
  //     this.getData = res;
  //     console.log(this.getData);
  //   }, err => {
  //     console.log("load failed");
  //   })
  // }

}
