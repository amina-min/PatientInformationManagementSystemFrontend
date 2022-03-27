import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient = new Patient();
  formGroup: FormGroup;
  submitted = false;
  fileToUpload: any;
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private toastr: ToastrService) {
    this.formGroup = this.fb.group(
      {
        patientName: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        age: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        address: ['', [Validators.required]],
        photo: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        phonNo: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],


      }
    )

  }

  get f() {
    return this.formGroup.controls;
  }

  isShowTable: boolean = false;
  isSave: boolean = true;

  ngOnInit(): void {
    if (history.state.isSave != undefined) {
      this.patient = history.state.patient
      this.isSave = history.state.isSave
      console.log(history.state.patient);

      
      this.formGroup.get('patientName')?.setValue(this.patient.patientName)
      this.formGroup.get('gender')?.setValue(this.patient.gender)
      this.formGroup.get('age')?.setValue(this.patient.age)
      this.formGroup.get('dob')?.setValue(this.patient.dob)
      this.formGroup.get('address')?.setValue(this.patient.address)
      this.formGroup.get('email')?.setValue(this.patient.email)
      this.formGroup.get('phonNo')?.setValue(this.patient.phonNo)
      

      let dp = new DatePipe(navigator.language);
let p = 'y-MM-dd'; // YYYY-MM-DD
let dtr = dp.transform(new Date(), p);
this.formGroup.get('dob')?.setValue(dtr)


    }

  }

  fileChange(files: any) {

    this.fileToUpload = files.files[0]
  }





  savePatient() {
    console.log(this.formGroup.value);

    this.submitted = true;
    const formData: FormData = new FormData();
    formData.append('id', this.patient.id.toString());

    formData.append('patientName', this.formGroup.get('patientName')?.value);
    formData.append('gender', this.formGroup.get('gender')?.value);
    formData.append('age', this.formGroup.get('age')?.value);
    formData.append('dob', new Date(this.formGroup.get('dob')?.value).toUTCString());


    formData.append('phonNo', this.formGroup.get('phonNo')?.value);
    formData.append('email', this.formGroup.get('email')?.value);
    formData.append('address', this.formGroup.get('address')?.value);
    if (this.isSave) {
      formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    }else{
      formData.append('photosUri',this.patient.photosUri);

    }

var saveApi = "http://localhost:9091/patientAdd"
var updateApi = "http://localhost:9091/patientUpdate"
    const headers = { 'content-Type': 'application/json' };
    this.http.post<any>(this.isSave?saveApi:updateApi, formData)
      .subscribe(data => {
        console.log(data);
        this.toastr.success("save successfull");
      }, err => {
        this.toastr.success("save Failed");
      }
      )
  }


}

