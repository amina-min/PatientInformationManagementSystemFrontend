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
    this.savePatient()

  }

  fileChange(files: any) {
    
    this.fileToUpload = files.files[0]
  }





  savePatient() {
    console.log(this.formGroup.value);
    
    this.submitted = true;       
    const formData: FormData = new FormData();    
    formData.append('patientName',this.formGroup.get('patientName')?.value);
    formData.append('gender',this.formGroup.get('gender')?.value);
    formData.append('age',this.formGroup.get('age')?.value);
     formData.append('dob', new Date(this.formGroup.get('dob')?.value.formate("dd-MM-yyyy")).toDateString());
    //formData.append('dob', new Date(this.fg.get('dob')?.value).toUTCString());

    //<p>{{myDate | date: 'dd-MM-yyyy'}}</p>
// Typescript
    formData.append('phonNo',this.formGroup.get('phonNo')?.value);
    formData.append('email',this.formGroup.get('email')?.value);
    formData.append('address',this.formGroup.get('address')?.value);
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    console.log(formData);

    const headers = { 'content-Type': 'application/json' };
    this.http.post<any>("http://localhost:9091/patientAdd", formData)
      .subscribe(data => {
        console.log(data);
        this.toastr.success("save successfull");
      },err => {
        this.toastr.success("save Failed");
      }
      )
  }








}

