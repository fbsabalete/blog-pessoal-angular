import { Tema } from './../model/Tema';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  baseUrl = environment.server + environment.port + '/tema';

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(this.baseUrl+`/${id}`, this.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>(this.baseUrl, this.token);
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>(this.baseUrl, tema, this.token);
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>(this.baseUrl, tema, this.token);
  }

  deleteTema(id: number){
    return this.http.delete(this.baseUrl+`/${id}`, this.token);
  }
}
