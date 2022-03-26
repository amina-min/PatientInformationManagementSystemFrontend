import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientInfo } from './patientInfo.model';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
  patientInfo: PatientInfo = new PatientInfo();
  
  submitted = false;
  fileToUpload: any;
  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  saveFamilyMemberInfo() {
   
      this.submitted = true;
      console.log(this.patientInfo.familyMemberName);
      const headers = { 'content-Type': 'application/json' };
      this.http.post<any>("http://localhost:9091/informationAdd", JSON.stringify(this.patientInfo), { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.toastr.success("save successfull");
        }
        )
    
   
  }

}
