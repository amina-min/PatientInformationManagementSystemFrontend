import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showpatient',
  templateUrl: './showpatient.component.html',

  styleUrls: ['./showpatient.component.css']
})
export class ShowpatientComponent implements OnInit {

  getPatient: any = [];

  patientName = "patientName";

  constructor(private http: HttpClient) { }

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

}








