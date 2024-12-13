import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { EmployelistComponent } from './employe/employelist/employelist.component';
import { AddEmployeComponent } from './employe/add-employe/add-employe.component';
import { AddPlatComponent } from './plat/add-plat/add-plat.component';
import { ListPlatsComponent } from './plat/list-plats/list-plats.component';
import { EditEmployeComponent } from './employe/edit-employe/edit-employe.component';

const routes: Routes = [
  {path:"",component:MenuComponent},
  {path:"contact",component:ContactComponent},
  {path:"employelist",component:EmployelistComponent},
  {path:"add-employe",component:AddEmployeComponent},
  {path:"add-plat",component:AddPlatComponent},
  {path:"platlist",component:ListPlatsComponent},
  {path:"edit-employe/:id",component:EditEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }