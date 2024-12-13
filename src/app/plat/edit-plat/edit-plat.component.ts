import { PlatssService } from './../../services/platss.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from '../../Model/Plat';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
  frmPlat!: FormGroup;
  plat!: Plat;

  constructor(
    private fb: FormBuilder,
    private platService: PlatssService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const platId = Number(this.route.snapshot.paramMap.get('id'));
    this.platService.GetPlatById(platId).subscribe({
      next: (data: Plat) => {
        if (data) {
          this.plat = data;
          this.initForm();
        } else {
          console.error('Plat not found');
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erreur lors de la récupération du plat:', err);
      }
    });
  }

  private initForm(): void {
    this.frmPlat = this.fb.group({
      nom: [this.plat.nom, [Validators.required]],
      categorie: [this.plat.categorie, [Validators.required]],
      prix: [this.plat.prix, [Validators.required, Validators.min(0)]],
      jours: [this.plat.jours, [Validators.required]],
      ingredients: [this.plat.ingredients, [Validators.required]],
      tempspreparation: [
        this.plat.tempspreparation,
        [Validators.required, Validators.min(1)]
      ]
    });
  }

  onUpdate(): void {
    if (this.frmPlat.valid) {
      const updatedPlat:Plat = this.frmPlat.value;
      this.platService.EditPlat(updatedPlat.id, updatedPlat).subscribe({
        next: () => {
          alert('Plat mis à jour avec succès !');
          this.router.navigate(['/platlist'])
        },
        error: (err: HttpErrorResponse) => {
          alert('Erreur lors de la mise à jour : ' + err.message);
        }
      });
    }
  }
}
