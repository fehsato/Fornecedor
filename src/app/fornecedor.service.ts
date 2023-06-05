import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fornecedor } from './fornecedor';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = "http://localhost:3000/fornecedores";
  constructor(private http: HttpClient) { }

getClients(): Observable<fornecedor[]>{
  return this.http.get<fornecedor[]>(this.url);
}

save(fornecedor: fornecedor) : Observable<fornecedor>{
  return this.http.post<fornecedor>(this.url, fornecedor);

}

update(fornecedor: fornecedor): Observable<fornecedor>{
  return this.http.put<fornecedor>(`${this.url}/${fornecedor.id}`, fornecedor);
}

remove(fornecedor: fornecedor) : Observable<void>{
  return this.http.delete<void>(`${this.url}/${fornecedor.id}`);
}
}