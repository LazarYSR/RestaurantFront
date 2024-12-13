import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Plat } from '../Model/Plat';

@Injectable({
  providedIn: 'root'
})
export class PlatssService {
  apiUrl = environment.apiBaseUrl+"/Plats"
  constructor(private http:HttpClient) {
   }

   public AddPlat(plat:Plat):Observable<Plat>
   {
    return this.http.post<Plat>(`${this.apiUrl}`,plat)
   }
   
   public GetAllPlat():Observable<Plat[]>
   {
    return this.http.get<Plat[]>(`${this.apiUrl}`)
   }

   public DeletePlat(id:number):Observable<Plat>
   {
    return this.http.delete<Plat>(`${this.apiUrl}/${id}`)
   }

   public EditPlat(id:number,plated:Plat):Observable<Plat>
   {
    return this.http.put<Plat>(`${this.apiUrl}/${id}`,plated)
   }
   
   public GetPlatById(id:number):Observable<Plat>
   {
    return this.http.get<Plat>(`${this.apiUrl}/${id}`)
   }
}
