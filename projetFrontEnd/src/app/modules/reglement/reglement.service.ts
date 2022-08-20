import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {

  constructor(private httpClient: HttpClient) { }
  addReg(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterreglement', data);
  }
  getAllReglement(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirtousreglement');
  }
  supprimerReglement(id:any){
    return this.httpClient.delete<any>('http://127.0.0.1:8000/api/supprimerreglement/'+id);
  } 
  getreg_byID_user(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getreg_byID_user/'+id);

  }
  get_sum_Bay_byID_user(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getcountBay/'+id);

  }
  get_sum_rest_byID_user(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getsumreste/'+id);

  }
  getRegById(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getRegById/'+id);

  }
}
