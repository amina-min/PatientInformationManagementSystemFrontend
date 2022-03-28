import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../patient/patient.model';
import { FamilyMember } from './familymember.model';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
  familyMember: FamilyMember = new FamilyMember();
  patient: Patient = new Patient();
  
  submitted = false;
  fileToUpload: any;
  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      // if (params['patientId'] != undefined || params['patientId'] != null) {

      // }   
     
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
      this.familyMember.patientId = this.patient.id
      
    }, err => {
      console.log("patient load failed");
    })
  }

  saveFamilyMemberInfo() {
   
      this.submitted = true;
      console.log(this.familyMember.familyMemberName);
      const headers = { 'content-Type': 'application/json' };
      this.http.post<any>("http://localhost:9091/familyMemberAdd", JSON.stringify(this.familyMember), { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.toastr.success("save successfull");
        }
        )
    
   
  }

}
