import { HttpClient } from '@angular/common/http';
import { Component, DebugElement, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/entities/client';
// import { jsPDF } from 'jspdf';
import { Facture } from 'src/app/entities/facture';
import { Reglement } from 'src/app/entities/reglement';
import { ClientService } from 'src/app/modules/client/client.service';
import { DocumentService } from 'src/app/modules/Document/document.service';
import { AddproduitComponent } from 'src/app/modules/produit/addproduit/addproduit.component';
import { ProduitService } from 'src/app/modules/produit/produit.service';
import { UserAuthService } from 'src/app/modules/user/user-auth.service';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';




@Component({
  selector: 'app-imprimer',
  templateUrl: './imprimer.component.html',
  styleUrls: ['./imprimer.component.css']
})
export class ImprimerComponent implements OnInit {
type:any;
 nb="";
 idUser:any;
 id_Doc:any;
  constructor(private router:Router,private httpClient:HttpClient,private prodserver:ProduitService,private userAuthService:UserAuthService,private clientServer:ClientService,private docServer:DocumentService) {}

//   public openPDF(): void {
//     if(this.type==1){
//     let shand = document.getElementsByClassName('bb') as HTMLCollectionOf<HTMLElement>;

//     let DATA: any = document.getElementById('htmlData');
 
    
//     const doc = new jsPDF('p', 'pt', 'a4');
//     doc.html(DATA, {
      
//       callback: (pdf) => {
   
//     // window.open(URL.createObjectURL(pdf.output("blob")))
//     doc.save('FactureN° '+this.nb+'.pdf'); // save / download
//         //  doc.output('dataurlnewwindow');
//         //###################################################
//         // const formDatacl=new FormData();
//         // formDatacl.append('image_societé',doc.fill,'FactureN° '+this.nb+'.pdf');
//         // return this.httpClient.post<any>('http://127.0.0.1:8000/api/ajouterrolerole', formDatacl);

     
//      },

//      x:3,
//      y: 2
     
//    }
//    )
//  }
//   if(this.type==2){
    
    
//         const doc = new jsPDF('p', 'pt', 'a4');
//     const pages = doc.internal.pageSize;
//     doc.setProperties({
//       title: `Facture N° : la Facture`,
      
//     });
//     let shand = document.getElementsByClassName('tablewidth') as HTMLCollectionOf<HTMLElement>;


//         if (shand.length != 0) {
//           shand[0].style.width = "600px";
//         }
        
//     let DATA: any = document.getElementById('content1')
//     let Class_tbody_ligne1 = document.getElementsByClassName('morad') as HTMLCollectionOf<HTMLElement>;
   
    
//     let tbody_ligne1 : any = document.getElementById('tbody_ligne1')
//     /*var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
//     var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
//     var widthcontenu : any  = document.getElementById('contenu')?.offsetWidth;
  
//     console.log("width contenu"+widthcontenu)
//     console.log(pageHeight)
//     console.log("pageWidth "+pageWidth)*/

//     var Height_tbody_ligne1 : any  = document.getElementById('tbody_ligne1')?.offsetHeight;
//     var newHeight_tbody_ligne1 = Height_tbody_ligne1 - (1 * 22)

//     // console.log("new  =  "+newHeight_tbody_ligne1)
//     // console.log("Height_tbody_ligne1  =  "+Height_tbody_ligne1)

//       Class_tbody_ligne1[0].style.height = `${newHeight_tbody_ligne1}px`;

  
//     doc.html(DATA, {
      
//        callback: (pdf) => {
//       //  doc.save('test.pdf'); // save / download
//       //  doc.output('dataurlnewwindow'); // just open it

//       window.open(URL.createObjectURL(pdf.output("blob")))
//      console.log(pdf);
     
//       },
//    /*  callback:()=>{
//       doc.save('test.pdf'); // save / download
//       doc.output('dataurlnewwindow'); // just open it
//      }, */
//       x:1,
//       y: 10
//     })
//     setTimeout(() => {
//       shand[0].style.width = "100%";
//     }, 1);
//   }
// if(this.idUser==null)
//   this.router.navigate(['pro']);
//   else
//   this.router.navigate(['welcome/facture/list/facture']);
//   }
  
  // openPDF(){
  //   const doc = new jsPDF('p', 'pt', 'a4');
  //   const pages = doc.internal.pageSize;
  //   doc.setProperties({
  //     title: `Facture N° : la Facture`,
      
  //   });
  //   let shand = document.getElementsByClassName('tablewidth') as HTMLCollectionOf<HTMLElement>;


  //       if (shand.length != 0) {
  //         shand[0].style.width = "600px";
  //       }
        
  //   let DATA: any = document.getElementById('content1')
  //   let Class_tbody_ligne1 = document.getElementsByClassName('tbody_ligne1') as HTMLCollectionOf<HTMLElement>;
   
    
  //   let tbody_ligne1 : any = document.getElementById('tbody_ligne1')
  //   /*var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
  //   var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
  //   var widthcontenu : any  = document.getElementById('contenu')?.offsetWidth;
  
  //   console.log("width contenu"+widthcontenu)
  //   console.log(pageHeight)
  //   console.log("pageWidth "+pageWidth)*/

  //   var Height_tbody_ligne1 : any  = document.getElementById('tbody_ligne1')?.offsetHeight;
  //   var newHeight_tbody_ligne1 = Height_tbody_ligne1 - (1 * 22)

  //   // console.log("new  =  "+newHeight_tbody_ligne1)
  //   // console.log("Height_tbody_ligne1  =  "+Height_tbody_ligne1)

  //     Class_tbody_ligne1[0].style.height = `${newHeight_tbody_ligne1}px`;

  
  //   doc.html(DATA, {
      
  //      callback: (pdf) => {
  //     //  doc.save('test.pdf'); // save / download
  //     //  doc.output('dataurlnewwindow'); // just open it

  //     window.open(URL.createObjectURL(pdf.output("blob")))
     
  //     },
  //  /*  callback:()=>{
  //     doc.save('test.pdf'); // save / download
  //     doc.output('dataurlnewwindow'); // just open it
  //    }, */
  //     x:1,
  //     y: 10
  //   })
  //   setTimeout(() => {
  //     shand[0].style.width = "100%";
  //   }, 1);

  // }
  ngOnInit(): void {
this.idUser=this.userAuthService.getUserid();

    this.type=WelcomePageComponent.type;
    if(Facture.Nom_document!=null)
    this.nb==Facture.Nom_document;
  }
 //#####################""
 save(){
 
    
  //  });
    ///////////////Client///////////////////////////
    if(client.ICE!=null || client.Nom_client!=null || client.Nom_client!=null || client.Adresse_client!=null || client.Nom_client!=null){
    const formDatacl=new FormData();
  formDatacl.append('ICE',client.ICE);
  formDatacl.append('Nom_client',client.Nom_client);
  formDatacl.append('Adresse_client',client.Adresse_client);
  formDatacl.append('tele_client',client.Nom_client);
  formDatacl.append('id_user',this.idUser);
 this.clientServer.addclient(formDatacl).subscribe(res=>{
    ///////////////Document///////////////////////////
   const id_client=res.id;
   if(Facture.Nom_document!=null || Facture.date_document!=null || Facture.date_échéance!=null){
 const formDatado=new FormData();

 formDatado.append('id_client',id_client);
 formDatado.append('Nom_document',Facture.Nom_document);
 formDatado.append('Type_document',Facture.Type_document);
 formDatado.append('date_document',Facture.date_document);
 formDatado.append('date_echeance',Facture.date_échéance);
 formDatado.append('forme',this.type);
 formDatado.append('id_user',this.idUser);
this.docServer.addDocument(formDatado).subscribe(res=>{
 this.id_Doc=res.id;
       ///////////////Reglement///////////////////////////
if( Reglement.Type_payée!=null || Reglement.prix_payée!=null || Reglement.prix_reste!=null || Reglement.reference_reg!=null){
 const formDataRe=new FormData();

 formDataRe.append('Type_payee',Reglement.Type_payée);
 formDataRe.append('prix_payee',Reglement.prix_payée);
 formDataRe.append('prix_reste',Reglement.prix_reste);
 formDataRe.append('reference_reg',Reglement.reference_reg);

 formDataRe.append('id_user',this.idUser);
this.docServer.addreglemnt(formDataRe).subscribe(res=>{
  ///////////////////////////////////////
    const id_Reg=res.id;
  if(this.id_Doc!=null && id_Reg!=null){
  const formDataBay=new FormData();

  formDataBay.append('id_document',this.id_Doc);
  formDataBay.append('id_reglement',id_Reg);

 this.docServer.addBayDocument(formDataBay).subscribe(res=>{

   
  });
}
  ///////////////////////////////////////
  
 });
}
 });
}
 });

}




for (let index = 0; index < AddproduitComponent.produits.length; index++) {
///////////////Gategorier///////////////////////////
if(AddproduitComponent.produits[index].id_categories!=""){
  const formDataProd=new FormData();

formDataProd.append('id_categorier',AddproduitComponent.produits[index].id_categories);
formDataProd.append('Nom_produit',AddproduitComponent.produits[index].Nom_produit);
formDataProd.append('reference',AddproduitComponent.produits[index].reference);
formDataProd.append('prix_unitaire_TTC',AddproduitComponent.produits[index].prix_unitaire_TTC.toString());
formDataProd.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
formDataProd.append('id_user',this.idUser);
this.prodserver.addProd(formDataProd).subscribe(res=>{
const id_prod=res.id;
   ///////////LigneDocument////////////////////////
   const formDataLignDoc=new FormData();
  
   formDataLignDoc.append('id_document',this.id_Doc);
   formDataLignDoc.append('id_produit',id_prod);
   formDataLignDoc.append('Qte',AddproduitComponent.produits[index].quantity.toString());
   formDataLignDoc.append('PU_HT',AddproduitComponent.produits[index].PU_HT.toString());
   formDataLignDoc.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
  this.docServer.addLingDocument(formDataLignDoc).subscribe(res=>{
   const id_prod=res.id;
   
  });
});

}else{
const formDataGat=new FormData();
formDataGat.append('Nom_categorie',AddproduitComponent.produits[index].Nom_categorier.toString());
formDataGat.append('id_user',this.idUser);

this.prodserver.addGat(formDataGat).subscribe(res=>{
const id_Gat=res.id;
  ///////////Produit////////////////////////
const formDataProd=new FormData();

formDataProd.append('id_categorier',id_Gat);
formDataProd.append('Nom_produit',AddproduitComponent.produits[index].Nom_produit);
formDataProd.append('reference',AddproduitComponent.produits[index].reference);
formDataProd.append('prix_unitaire_TTC',AddproduitComponent.produits[index].prix_unitaire_TTC.toString());
formDataProd.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
formDataProd.append('id_user',this.idUser);
this.prodserver.addProd(formDataProd).subscribe(res=>{
const id_prod=res.id;
   ///////////LigneDocument////////////////////////
   const formDataLignDoc=new FormData();
  
   formDataLignDoc.append('id_document',this.id_Doc);
   formDataLignDoc.append('id_produit',id_prod);
   formDataLignDoc.append('Qte',AddproduitComponent.produits[index].quantity.toString());
   formDataLignDoc.append('PU_HT',AddproduitComponent.produits[index].PU_HT.toString());
   formDataLignDoc.append('Taux_TVA',AddproduitComponent.produits[index].Taux_TVA.toString());
  this.docServer.addLingDocument(formDataLignDoc).subscribe(res=>{
  
   
  });
});




});}




 }

}





}