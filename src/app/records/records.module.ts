import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuralOneComponent } from './mural-one/mural-one.component';
import { RecordsRoutingModule } from './records-routing.module';
import { DepositionsComponent } from './depositions/depositions.component';
import { MuralTwoComponent } from './mural-outhers/mural-two/mural-two.component';
import { MuralTreComponent } from './mural-outhers/mural-tre/mural-tre.component';
import { MuralOuthersComponent } from './mural-outhers/mural-outhers.component';
import { DepositionDetailsComponent } from './deposition-details/deposition-details.component';
import { Mural2DetailsComponent } from './mural-outhers/mural2-details/mural2-details.component';
import { Mural3DetailsComponent } from './mural-outhers/mural3-details/mural3-details.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';

@NgModule({
  declarations: [
    DepositionsComponent,
    MuralOneComponent,
    MuralTwoComponent,
    MuralTreComponent,
    MuralOuthersComponent,
    DepositionDetailsComponent,
    Mural2DetailsComponent,
    Mural3DetailsComponent,
    EntrevistaComponent,
    InterviewDetailsComponent],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule { }
