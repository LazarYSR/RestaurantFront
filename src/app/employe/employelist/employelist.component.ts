import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Employe } from '../../Model/Employe';
import { Router, RouterLink } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';


@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrl: './employelist.component.css'
})
export class EmployelistComponent implements OnInit {
  public employeslist:Employe[]=[]
  public loading = true;
  constructor(private route:Router,private employeesService:EmployeesService)
  {
    
  }
  
  ngOnInit(): void {
    this.GetAllEmployes();
  }
  GetAllEmployes():void
  {
    this.employeesService.getEmployees().subscribe(
      (res:Employe[]) =>{
        this.employeslist = res;
        this.loading = false
      },
      (err:HttpErrorResponse) => {
        alert(err.message)
        this.loading = false
      }
      
     );
  }
  onToEditEmploye(numm:number):void
  {
    this.route.navigate(["/edit-employe",numm])
  }
  onToDeleteEmploye(n:number):void{
    this.employeesService.deleteEmployees(n).subscribe(
      {
        next :res=>{
            alert(`La suppression du Employe Avec ID:${n} est avec Succes !!`)
            this.GetAllEmployes()
        },
        error: er=>
        {
          alert(`${er.message}`)
        }
      }
    );
  }

  onAdd():void{
    this.route.navigate(["/add-employe"]);
  }

}
