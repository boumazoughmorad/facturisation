import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient) { }
  addDocument(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterdocument', data);
  } 
  addLingDocument(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterlignedocument', data);
  } 
  addBayDocument(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterbay', data);
  }
  addreglemnt(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterreglement', data);
  }
  getInfodocuments(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirdocuments');
  } 
  getInfoAlldocuments(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirtousdocuments');
  } 
  getInfodocumentById(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirdocument/'+id);
  } 
  supprimerByid(id:any){
    return this.httpClient.delete<any>('http://127.0.0.1:8000/api/supprimerdocument/'+id);
  } 
  getBayBy(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirbay');
  } 
  getlproduitsByidocument(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getlproduitsByidocument/'+id);

  }
}
