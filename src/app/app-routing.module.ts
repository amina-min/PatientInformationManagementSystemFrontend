import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersComponent } from './components/family-members/family-members.component';
import { PatientComponent } from './components/patient/patient.component';
import { ShowpatientComponent } from './components/showpatient/showpatient.component';

const routes: Routes = [

  { path: 'patient', component: PatientComponent },
  { path: 'familyInfo', component: FamilyMembersComponent },
  { path: 'showPatient', component: ShowpatientComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
