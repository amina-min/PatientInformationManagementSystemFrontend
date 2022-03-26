import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersComponent } from './components/family-members/family-members.component';
import { PatientComponent } from './components/patient/patient.component';

const routes: Routes = [

  { path: 'patient', component: PatientComponent },
  { path: 'family', component: FamilyMembersComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
