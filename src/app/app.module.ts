import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FamilyMembersComponent } from './components/family-members/family-members.component';
import { ShowpatientComponent } from './components/showpatient/showpatient.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    FamilyMembersComponent,
    ShowpatientComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
