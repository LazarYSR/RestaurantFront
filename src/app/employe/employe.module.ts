import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployelistComponent } from './employelist/employelist.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';



@NgModule({
  declarations: [
   EditEmployeComponent,
    EmployelistComponent,
    AddEmployeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
    
  ]
})
export class EmployeModule { }
