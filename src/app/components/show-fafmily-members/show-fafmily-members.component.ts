import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FamilyMember } from '../family-members/familymember.model';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-show-fafmily-members',
  templateUrl: './show-fafmily-members.component.html',
  styleUrls: ['./show-fafmily-members.component.css']
})
export class ShowFafmilyMembersComponent implements OnInit {

  patient = new Patient()
  familyMembers:FamilyMember[] = []

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      // if (params['patientId'] != undefined || params['patientId'] != null) {

      // }   
      this.getFamilyMembersByPatientId(params['patientId']);
       this.getPatient(params['patientId'])
    })


  }

getPatient(patientId:string){
  const header = {
    "Content-Type": "application/json"
  };
  this.http.get('http://localhost:9091/getPatient/' + patientId, { headers: header }).subscribe((res: any) => {
    console.log(res);
    this.patient = res.data;
    
  }, err => {
    console.log("patient load failed");
  })
}

  getFamilyMembersByPatientId(patientId: number) {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9091/getFamilyMembers/' + patientId, { headers: header }).subscribe((res: any) => {
      console.log(res);
      this.familyMembers = res.data;

      
    }, err => {
      console.log("load failed");
    })
  }


  

}
