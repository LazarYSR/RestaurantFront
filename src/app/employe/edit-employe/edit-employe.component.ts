import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '../../Model/Employe';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css'] 
})
export class EditEmployeComponent implements OnInit {
  frmEmploye!: FormGroup; 
  public employe!: Employe; 

  constructor(
    private employeservice: EmployeesService,
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private rt:Router) {
      
    }
 

  ngOnInit(): void {
    this.frmEmploye = this.fb.group({
      nom: [''],
      prenom: [''],
      role: [''],
    });
  
    const employeid = Number(this.router.snapshot.paramMap.get('id'));

    this.employeservice.getEmployeesById(employeid).subscribe({
      next: (data: Employe) => {
        console.log('Données récupérées:', data); 
        this.employe = data; 
        this.initForm();
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'employé:', err);
      },
    });
  }
  initForm(): void {
    this.frmEmploye = this.fb.group({
      nom: [this.employe?.nom || '', [Validators.required]], // Utilisez une valeur par défaut si "nom" est undefined
      prenom: [this.employe?.prenom || '', [Validators.required]],
      role: [this.employe?.role || '', [Validators.required]],
    });
 
  }

  onEdit():void {
    if (this.frmEmploye.valid) 
      {
      const employeId = Number(this.router.snapshot.paramMap.get('id'));
      const updatedEmploye:Employe= this.frmEmploye.value;

      this.employeservice.EditEmployees(employeId, updatedEmploye).subscribe({
        next: () => {
          alert('Employé modifié avec succès');
          this.rt.navigate(['/employelist'])

        },
        error: (error: HttpErrorResponse) => {
          alert(`Erreur : ${error.message}`);
        },
      });
    } else {
      alert('Veuillez remplir correctement le formulaire avant de soumettre.');
    }
  }
}
