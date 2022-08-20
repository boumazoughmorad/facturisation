import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/entities/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  upload(f:any): Observable<any> {
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/addimgSoc', f);
  }
  getimg(): Observable<any> {
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/getImg');
  }
  getusers(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voiruser');
}
deleteuser(id:any): Observable<any> {
  return this.httpClient.delete<any>('http://127.0.0.1:8000/api/supprimeruser/'+id);
}
  addUser(data:any): Observable<any>{
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouteruser', data);
  } 
  addRol(data:any): Observable<any>{
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterrole', data);
  }
  getLineRol(): Observable<any>{
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getinfouser');
  }
  getinfobyiduser(id:any): Observable<any>{
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/getinfobyiduser/'+id);
  }
  addLingRol(data:any): Observable<any>{
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterrolerole', data);
  }
//  a3QiqGgnAnyluNRBAd8P20MDc8jrgoHnNoK3fiKB 
login(data:any): Observable<any>{
  return this.httpClient.post<any>('http://127.0.0.1:8000/api/login', data);
}
getUserbyId(id:any): Observable<any>{
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/getUserByid/'+id);
}
updateUser(id:any,data:any): Observable<any>{
  return this.httpClient.put<any>('http://127.0.0.1:8000/api/modifieruser/'+id,data);
}
NemberUserAuth(){
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/NemberUserAuth');

}
}
