import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../Model/Employe';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  apiUrl= environment.apiBaseUrl +"/Employes"
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }
  getEmployeesById(id:number): Observable<Employe> {
    return this.http.get<Employe>(`${this.apiUrl}/${id}`);
  }
  public addEmployees(employe:Employe):Observable<Employe>
  {
    return this.http.post<Employe>(`${this.apiUrl}`,employe);
  }
  public deleteEmployees(idemp:number):Observable<Employe>
  {
    return this.http.delete<Employe>(`${this.apiUrl}/${idemp}`);
  }
  public EditEmployees(id:number,employe:Employe):Observable<Employe>
  {
    return this.http.put<Employe>(`${this.apiUrl}/${id}`,employe);
  }
}
