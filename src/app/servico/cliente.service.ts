import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Url da API

  private url:string = 'http://localhost:8080';

  constructor( private http:HttpClient) { }

  // Metoto para selecionar todosd os clientes

  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente []>(this.url);
  }

  // Método para cadastrar cliente
  cadastrar(obj:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, obj);
  }

  
  // Método para editar cliente
  editar(obj:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.url, obj);
  }


}
