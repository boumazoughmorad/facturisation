import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient) { }
  addProd(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterproduit', data);
  }
  addGat(data:any){
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajoutercategorie', data);
  }
  count_produit(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/count_produit/'+id);
  }
  get_produit(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirproduit/'+id);
  }
  getproduitById(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getproduitById/'+id);
  }
  voirtousproduit(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/voirtousproduit');

  }
  updateDELETEproduit(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/updateDELETEproduit/'+id);

  }
  supprimerproduit(id:any){
    return this.httpClient.delete<any>('http://127.0.0.1:8000/api/supprimerproduit/'+id);

  }
  getLigneDocumentByIdProduit(id:any){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/getLigneDocumentByIdProduit/'+id);

  }
}
