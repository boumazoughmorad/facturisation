<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\document;
use DB;
use App\Http\Controllers\Controller;
class documentController extends Controller
{
    //
         //##################  creer nouveux document  ####################
         public function ajouterdocument(Request $request){
          if (empty($request->dete_échéance)) {
        //   if($request->Type_document==1){
            $document = new document([
      
                'id_client' => $request->id_client,
                'Nom_document' => $request->Nom_document,
                'Type_document' => $request->Type_document,
                'date_echeance' => $request->date_échéance,
                'id_user' => $request->id_user,
                'forme'=> $request->forme,
                
                 ]);
                // }
                //  elseif ($request->Type_document==2) {
                //     # code...
                //     $document = new document([
      
                //         'id_client' => $request->id_client,
                //         'Nom_document' => $request->Nom_document,
                //         'Type_document' => $request->Type_document,
                //         'date_échéance' => $request->date_échéance,
                //         'id_user' => $request->id_user,
                        
                        
                //          ]);
                //  }
                //  elseif ($request->Type_document==3) {
                //     # code...
                //     $document = new document([
      
                //         'id_client' => $request->id_client,
                //         'Nom_document' => $request->Nom_document,
                //         'Type_document' => $request->Type_document,
                //         'date_échéance' => $request->date_échéance,
                //         'id_user' => $request->id_user,
                        
                        
                //          ]);
                //  }
                //  elseif ($request->Type_document==4) {
                //     # code...
                //     $document = new document([
      
                //         'id_client' => $request->id_client,
                //         'Nom_document' => $request->Nom_document,
                //         'Type_document' => $request->Type_document,
                //         'date_échéance' => $request->date_échéance,
                //         'id_user' => $request->id_user,
                        
                        
                //          ]);
                //  }
                //  elseif ($request->Type_document==5) {
                //     # code...
                //     $document = new document([
      
                //         'id_client' => $request->id_client,
                //         'Nom_document' => $request->Nom_document,
                //         'Type_document' => $request->Type_document,
                //         'date_échéance' => $request->date_échéance,
                //         'id_user' => $request->id_user,
                        
                        
                //          ]);
                //  }
          }else {
            $document = new document([
      
                'id_client' => $request->id_client,
                'Nom_document' => $request->Nom_document,
                'Type_document' => $request->Type_document,
                
                'id_user' => $request->id_user,
                'forme'=> $request->forme,
                
                
                 ]);
          }
             
                   $date_document=date('Y/m/d');
             
                   $document->date_document=$date_document;
                $save = $document->save();
        
                if( $save ){
                  
                    return response()->json($document);
                }else{
                 
                  return response()->json(['message'=>'le document n\'est pas ajouter'],404);
                    
                } 
            
            
            
            }
      
      
            
       //##################  supprimer document  ####################
            public function supprimerdocument(Request $request,$id){
        
                $document=document::find($id);
                if(is_null($document)){
                    return response()->json(['message'=>'document ne trouve pas'],404);
                }
                $document->delete();
                return response()->json(['message'=>'document est supprimer'],405);
                
                
            }
      
      
      
      //##################  Modifier de document  ####################
      
            public function modifierdocument(Request $request,$id){
             
                $document=document::find($id);
                if(is_null($document)){
                    return response()->json(['message'=>'document ne trouve pas'],404);
                }
                $document->update($request->all());
                return response($document,200);
        
            }
      
      
      //##################  selectionner tous les document  ####################
            public function getTousdocuments(Request $request){
                $document=document::withTrashed()->get();
                return response()->json($document,200);
                
         
             }
      
      
      //##################  selectionner les document n'est pas supprimer  ####################
             public function getdocument(){
                return response()->json(document::all(),200);}

      //######################### Recherche Document par id #####################################
public function getDocumentById($id){
    $document=document::find($id);
    if(is_null($document)){
        return response()->json(['message'=>'document introvable'],404);
    }
    return response()->json(document::find($id),200);
}
   //##################  count All   ####################
   public function count_ALLdocument(){

    $documentdP=document::where('Type_document','=','demande_prix')->whereNull("deleted_at")->count();
    $documentdP1=document::where('Type_document','=','demande_prix')->count();

    $documentBC=document::where('Type_document','=','bon_commande')->whereNull("deleted_at")->count();
 $documentBC1=document::where('Type_document','=','bon_commande')->count();
  
 $documentD=document::where('Type_document','=','devise')->whereNull("deleted_at")->count();
 $documentD1=document::where('Type_document','=','devise')->count();
   
 $documentBL=document::where('Type_document','=','bon_livraison')->whereNull("deleted_at")->count();
$documentBL1=document::where('Type_document','=','bon_livraison')->count();
  
$documentF=document::where('Type_document','=','facture')->whereNull("deleted_at")->count();
 $documentF1=document::where('Type_document','=','facture')->count();
  
 $documentA=document::where('Type_document','=','avoir')->whereNull("deleted_at")->count();
$documentA1=document::where('Type_document','=','avoir')->count();
        
    // $document1 = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
    // ->where('Role','=','fournisure')->whereNull("users.deleted_at") ->count();
    // $document= DB::table('documents')
    //     ->select(['documents.*']) ->count();
        $data=[
           
           [ "nonsupprimar"=>$documentdP,"tous"=> $documentdP1],
           [ "nonsupprimar"=>$documentBC,"tous"=> $documentBC1],
           [ "nonsupprimar"=>$documentD,"tous"=> $documentD1],
           [ "nonsupprimar"=>$documentBL,"tous"=> $documentBL1],
           [ "nonsupprimar"=>$documentF,"tous"=> $documentF1],
           [ "nonsupprimar"=>$documentA,"tous"=> $documentA1],
            
           
    ];

      return response()->json($data,200);}

    //   ####################################################"
      public function statistiquedocument(){
    // $documentdP=document::where('Type_document','=','demande_prix')->whereNull("deleted_at")->count();
           
        $document = DB::table("documents")
        ->select(DB::raw("COUNT(*) as value,Type_document as name"))
        // ->take(2)
        // ->whereMonth('created_at', '>=', date('m')-4)
        // ->whereYear('created_at', '=', date('Y'))
        ->groupBy(DB::raw("Type_document"))
        ->orderBy('value','DESC')
        ->get();
        // $user = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
        // ->where('Role','=','admin')->get();

        // $categorie = DB::table('categories')->where('id_user','=',$id)->orWhere('id_user','=',$user[0]->id_user)->get();
        // return response()->json($categorie,200);
  
        return response()->json($document,200);


     

        
        }
}
