<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reglement;
use DB;
use App\Http\Controllers\Controller;
class reglementController extends Controller
{
    //##################  creer nouveux reglement  ####################
    public function ajouterreglement(Request $request){
   
          $reglement = new reglement([
  
              'prix_payee' => $request->prix_payee,
              'prix_reste' => $request->prix_reste,
              'Type_payee' => $request->Type_payee,
              'reference_reg' => $request->reference_reg,
              'id_user' => $request->id_user,
           
              
               ]);
    
        
         
             
            $save = $reglement->save();
    
            if( $save ){
              
                return response()->json($reglement);
            }else{
             
              return response()->json(['message'=>'le reglement n\'est pas ajouter'],404);
                
            } 
        
        
        
        }
  
  
        
   //##################  supprimer reglement  ####################
        public function supprimerreglement($id){
    
            // $reglement=reglement::find($id);
    $reglement = DB::table('reglements')->where('id','=',$id)->first();
            
            if(is_null($reglement)){
                return response()->json(['message'=>'reglement ne trouve pas'],404);
            }
            // $reglement->delete();
    $reglement = DB::table('reglements')->where('id','=',$id)->delete();

            return response()->json(['message'=>'reglement est supprimer'],200);
            
            
        }
 //##################  selectionner reglement byid users ####################
           public function getreg_byID_user($id){
    
            // $reglement=reglement::find($id);
    $reglement = DB::table('reglements')->where('id_user','=',$id)->get();
    return response()->json($reglement,200);

            
            if(is_null($reglement)){
                return response()->json(['message'=>'reglement ne trouve pas'],404);
            }
            // $reglement->delete();
    $reglement = DB::table('reglements')->where('id','=',$id)->delete();

            return response()->json(['message'=>'reglement est supprimer'],200);
            
            
        }
   //##################  selectionner count bay reglement  ####################
   public function getcountBay($id){
    $res = DB::table("reglements")
	    ->select(DB::raw("SUM(prix_payee) as count"))
        ->whereNull("deleted_at")
	    // ->orderBy("deleted_at")
        ->where("id_user","=",$id)
	    ->groupBy(DB::raw("year(created_at)"))
	    ->get();
    
return response()->json($res,200);

}
 //######################### Recherche reglement par id #####################################
 public function getRegById($id){
    $reglement=reglement::find($id);
    if(is_null($reglement)){
        return response()->json(['message'=>'reglement introvable'],404);
    }
    return response()->json(reglement::find($id),200);
}
   //##################  selectionner count reste reglement  ####################
   public function getsumreste($id){
    $res = DB::table("reglements")
	    ->select(DB::raw("SUM(prix_reste) as count"))
	    ->orderBy("deleted_at")
        ->where("deleted_at","=","null","and","id_user","=",$id)
	    ->groupBy(DB::raw("year(deleted_at)"))
	    ->get();
    
return response()->json($res,200);

}
  
  
  //##################  Modifier de reglement  ####################
  
        public function modifierreglement(Request $request,$id){
            
            $reglement=reglement::find($id);
            if(is_null($reglement)){
                return response()->json(['message'=>'reglement ne trouve pas'],404);
            }
            $reglement->update($request->all());
            return response($reglement,200);
    
        }
  
  
  //##################  selectionner tous les reglement  ####################
        public function getTousreglements(Request $request){
            $reglement=reglement::withTrashed()->get();
            return response()->json($reglement,200);
            
     
         }
  
  
  //##################  selectionner les reglement n'est pas supprimer  ####################
         public function getreglement(){
            return response()->json(reglement::all(),200);}
}
