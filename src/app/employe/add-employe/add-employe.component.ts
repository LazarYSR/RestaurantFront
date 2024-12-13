import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { Employe } from '../../Model/Employe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  frmEmploye:FormGroup
  constructor(public frmbuilder:FormBuilder,private employeservice:EmployeesService,private router:Router)
  {
    this.frmEmploye =this.frmbuilder.group({
      nom:['',[Validators.required,Validators.minLength(5)]],
      prenom:['',[Validators.required,Validators.minLength(5)]],
      role:['',[Validators.required]]
    })
  
  
  }
  ngOnInit(): void {
    this.frmEmploye.reset()
  }

  onAdd():void
  {
  // {
  //     if(this.frmEmploye.valid)
  //     {
  //       // const {nom,prenom,role} =this.frmEmploye.controls
  //       const employe: Employe = this.frmEmploye.value; 
      
  //       this.employeservice.addEmployees();
  //         alert(`Le nom :${nom.value} son prenom ${prenom.value} et son role ${role.value}`)
  //     }else
  //     {
  //       alert(`Non Valid !!`)
  //     }
  if (this.frmEmploye.valid) {
    const employe: Employe = this.frmEmploye.value; 
    
    this.employeservice.addEmployees(employe).subscribe({
      next:(response) => {
        alert(`Employé ajouté avec succès : Nom: ${response.nom}, Prénom: ${response.prenom}, Rôle: ${response.role}`);
        this.router.navigate(['/employelist'])
      },
      error:(error) => {
        console.error(error);
        alert('Une erreur s\'est produite lors de l\'ajout de l\'employé.');
      }
    });
  } else {
    alert('Formulaire non valide. Veuillez vérifier les champs.');
  }
}
}


