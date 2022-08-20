import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorierService {

  constructor(private httpClient: HttpClient) { }
 
  getcategories(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voircategorie');
  }
  ajouter_categoier(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajoutercategorie', data);
  }
  fincategorie(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/findcategoriesBYID/'+id);
  }
  fincategorieByIDuser(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/findcategoriesBYID_USER/'+id);
  }
  statiquecategories(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/statiquecategories');

  }
  statiquecategoriesByID(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/statiquecategoriesByID/'+id);

  }
}
