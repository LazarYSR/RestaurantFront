import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plat } from '../../Model/Plat';
import { PlatssService } from '../../services/platss.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrl: './add-plat.component.css'
})
export class AddPlatComponent implements OnInit{
  frmplat : FormGroup;
  constructor(private fb:FormBuilder,private platservice:PlatssService)
  {
    this.frmplat =this.fb.group({
      nom:['',Validators.required],
      categorie:['',Validators.required],
      prix:[0,[Validators.required,Validators.min(1)]],
      jours:['',Validators.required],
      ingredients:['',Validators.required],
      tempspreparation:[0,[Validators.required,Validators.min(1)]]
    });
  }
  ngOnInit(): void {
    this.frmplat.reset();
  }

  onAjouter():void
  {
       if(this.frmplat.valid)
       {
        const plat:Plat=this.frmplat.value;
        this.platservice.AddPlat(plat).subscribe(
        {
          next:(response) => {
            alert(`Plat ajouté avec succès ${this.frmplat.value}`);
            this.frmplat.reset(); 
          },
          error:(error) => {
            console.error(error);
            alert('Une erreur s\'est produite lors de l\'ajout de l\'employé.');
          }
        }
        )
      }
  }
}
