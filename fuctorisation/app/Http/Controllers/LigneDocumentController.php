<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lignedocument;

use App\Http\Controllers\Controller;
class LigneDocumentController extends Controller
{
    //
      //##################  creer nouveux Ligne ligneDocument  ####################
      public function ajouterligneDocument(Request $request){
      
          # code...
          $ligneDocument = new lignedocument([
    
              'id_document' => $request->id_document,
              'id_produit' => $request->id_produit,
              'Qte' => $request->Qte,
              'PU_HT' => $request->PU_HT,
              
              
              
               ]);
        
           
                
           
               
              $save = $ligneDocument->save();
      
              if( $save ){
                
                  return response()->json($ligneDocument);
              }else{
               
                return response()->json(['message'=>'le ligneDocument n\'est pas ajouter'],404);
                  
              } 
          
          
          
          }
    
    
          
     //##################  supprimer ligneDocument  ####################
          public function supprimerligneDocument(Request $request,$id){
      
              $ligneDocument=lignedocument::find($id);
              if(is_null($ligneDocument)){
                  return response()->json(['message'=>'ligneDocument ne trouve pas'],404);
              }
              $ligneDocument->delete();
              return response()->json(['message'=>'ligneDocument est supprimer'],405);
              
              
          }
    
    
    
    //##################  Modifier de ligneDocument  ####################
    
          public function modifierligneDocument(Request $request,$id){
           
              $ligneDocument=lignedocument::find($id);
              if(is_null($ligneDocument)){
                  return response()->json(['message'=>'ligneDocument ne trouve pas'],404);
              }
              $ligneDocument->update($request->all());
              return response($ligneDocument,200);
      
          }
    
    
    //##################  selectionner tous les ligneDocument  ####################
          public function getTousligneDocuments(Request $request){
              $ligneDocument=lignedocument::withTrashed()->get();
              return response()->json($ligneDocument,200);
              
       
           }
    
    
    //##################  selectionner les ligneDocument n'est pas supprimer  ####################
           public function getligneDocument(){
              return response()->json(ligneDocument::all(),200);}

    //##################  selectionner les ligneDocument n'est pas supprimer  ####################
    public function getlproduitsByidocument($id){
              $ligneDocument = lignedocument::join('documents', 'lignedocuments.id_document', '=', 'documents.id')->join('produits', 'lignedocuments.id_produit', '=', 'produits.id')
              ->where('lignedocuments.id_document','=',$id)
              ->whereNull("produits.deleted_at")
            ->get();

            return response()->json($ligneDocument,200);
        }
        public function getLigneDocumentByIdProduit($id){
            $ligneDocument = lignedocument::
            where('id_produit','=',$id)
           
          ->get();

          return response()->json($ligneDocument,200);
      }
}
