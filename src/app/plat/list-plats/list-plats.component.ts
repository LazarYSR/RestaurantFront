import { Component, OnInit } from '@angular/core';
import { PlatssService } from '../../services/platss.service';
import { Plat } from '../../Model/Plat';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-plats',
  templateUrl: './list-plats.component.html',
  styleUrl: './list-plats.component.css'
})
export class ListPlatsComponent implements OnInit{
  platss = [
    { nom: 'poisson' },
    { nom: 'pizza' },
    { nom: 'spaghetti' },
    { nom: 'pancake' },
    { nom: 'burger' },
    { nom :'salade' },
    { nom :'sushi'}
  ];
  public plats :Plat[]=[]
  public loading=true
  constructor(private platssService:PlatssService,private http:HttpClient,private router:Router )
  {

  }
  getImagePath(platNom: string): string {
   
    const monplat = this.platss.find((p) => 
      platNom.toLowerCase().includes(p.nom.toLowerCase())
    );
    return monplat ? `../../../assets/${monplat.nom}.jpg` : '../../../assets/default.jpg';
  }
  ngOnInit(): void {
    this.GetAllPlats();
  }
  GetAllPlats():void
  {
    this.platssService.GetAllPlat().subscribe(
      (res:Plat[])=>
      {
        this.plats=res
        this.loading=false
      },
      (err:HttpErrorResponse)=>
      {
          alert(err.message)
          this.loading=false
      }
      )
  };
  onAddSection():void
  {
    this.router.navigate(["/add-plat"])
  }
   
}




