<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\bay;
use DB;
class bayController extends Controller
{
    //
      //##################  creer nouveux bay  ####################
      public function ajouterbay(Request $request){
      
        $bay = new bay([ 
          'id_document' => $request->id_document,
          'id_reglement' => $request->id_reglement,
          
           ]);
           
          $save = $bay->save();
  
          if( $save ){
            
              return response()->json($bay);
          }else{
           
            return response()->json(['message'=>'le bay n\'est pas ajouter'],404);
              
          } 
      
      
      
      }


      
 //##################  supprimer bay  ####################
      public function supprimerbay(Request $request,$id){
  
          $bay=bay::find($id);
          if(is_null($bay)){
              return response()->json(['message'=>'bay ne trouve pas'],404);
          }
          $bay->delete();
          return response()->json(['message'=>'bay est supprimer'],405);
          
          
      }



//##################  Modifier de bay  ####################

      public function modifierbay(Request $request,$id){
       
          $bay=bay::find($id);
          if(is_null($bay)){
              return response()->json(['message'=>'bay ne trouve pas'],404);
          }
          $bay->update($request->all());
          return response($bay,200);
  
      }


//##################  selectionner tous les bay  ####################
      public function getTousbays(Request $request){
          $bay=bay::withTrashed()->get();
          return response()->json($bay,200);
          
   
       }


//##################  selectionner les bay n'est pas supprimer  ####################
       public function getbay(){
          return response()->json(bay::all(),200);}
 //##################  selectionner les bay n'est pas supprimer  ####################
public function getbay_Reg_Doc($idD){
    // return response()->json(bay::all(),200);
    $result = DB::table('bays')->where('id_reglement','=',$idD)->get();

    return response()->json( $result,200);


}
}



