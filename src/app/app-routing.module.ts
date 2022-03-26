import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFafmilyMembersComponent } from './components/show-fafmily-members/show-fafmily-members.component';
import { FamilyMembersComponent } from './components/family-members/family-members.component';
import { PatientComponent } from './components/patient/patient.component';
import { ShowpatientComponent } from './components/showpatient/showpatient.component';

const routes: Routes = [

  { path: 'patient', component: PatientComponent },
  { path: 'familyInfo', component: FamilyMembersComponent },
  { path: '', component: ShowpatientComponent },
  { path: 'showFamilyMembers', component: ShowFafmilyMembersComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
