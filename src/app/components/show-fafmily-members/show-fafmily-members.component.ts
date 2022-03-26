import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientInfo } from '../family-members/patientInfo.model';

@Component({
  selector: 'app-show-fafmily-members',
  templateUrl: './show-fafmily-members.component.html',
  styleUrls: ['./show-fafmily-members.component.css']
})
export class ShowFafmilyMembersComponent implements OnInit { 
  getData: any = [];
  patientinfo: PatientInfo = new PatientInfo();
  familyMemberName= "familyMemberName";
  isSave: boolean = true;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
 
  ngOnInit(): void {
    this.getAllPatientFamilyMembers();
  }

  getAllPatientFamilyMembers() {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:9091/getAllfamilyMember', { headers: header }).subscribe((res) => {
      //console.log(res);
      this.getData = res;
      console.log(this.getData);
    }, err => {
      console.log("load failed");
    })
  }

}
