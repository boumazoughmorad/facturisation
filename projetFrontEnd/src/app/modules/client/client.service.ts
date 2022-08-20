import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }
  addclient(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterClient', data);
  }
  getclients(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirclient');
  }
  deletclient(id:any){
    return this.httpClient.delete<any>('http://127.0.0.1:8000/api/supprimerClient/'+id);
  }
  updateclient(id:any,data:any){
    return this.httpClient.put<any>('http://127.0.0.1:8000/api/modifieruser/'+id,data);
  }
  
  getclientsByIDuser(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getclientsbyiduser/'+id);
  }
  getclientById(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getclientById/'+id);

  }
}
