import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPlatsComponent } from './list-plats/list-plats.component';
import { EditPlatComponent } from './edit-plat/edit-plat.component';




@NgModule({
  declarations: [
    AddPlatComponent,
    ListPlatsComponent,
    EditPlatComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PlatModule { }
