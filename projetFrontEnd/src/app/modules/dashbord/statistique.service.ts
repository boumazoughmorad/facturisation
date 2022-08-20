import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private httpclient:HttpClient) {
   
   }
   count_ALLcategories(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/count_ALLcategories");
  }
  count_ALLClient(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/count_ALLClient");

  }
  count_ALLproduit(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/count_ALLproduit");

  }
  count_ALLFournisseur(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/count_ALLFournisseur");

  }
  count_ALLdocument(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/count_ALLdocument");


  }
  statistiqueUser4monis(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/statistiqueUser4monis");

  }
  statistiqueTOP5produit(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/statistiqueTOP5produit");

  }
  statistiquedocument(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/statistiquedocument");

  }
  statistiquecategories3annees(){
    return this.httpclient.get<any>("http://127.0.0.1:8000/api/statistiquecategories3annees");

  }
}
