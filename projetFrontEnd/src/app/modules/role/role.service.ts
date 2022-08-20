import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpclient:HttpClient) { }

  voirtousrole(){
    return this.httpclient.get<any>('http://127.0.0.1:8000/api/voirtousrole');

  }
  updateDELETErole(id:any){
    return this.httpclient.get<any>('http://127.0.0.1:8000/api/updateDELETErole/'+id);

  }
  supprimerrole(id:any){
    return this.httpclient.delete<any>('http://127.0.0.1:8000/api/supprimerrole/'+id);
    
  }
  ajouterrole(data:any){
    return this.httpclient.post<any>('http://127.0.0.1:8000/api/ajouterrole',data);

  }
  getRoleById(id:any){
    return this.httpclient.get<any>('http://127.0.0.1:8000/api/getRoleById/'+id);

  }
  voirrole(){
    return this.httpclient.get<any>('http://127.0.0.1:8000/api/voirrole');

  }
}
