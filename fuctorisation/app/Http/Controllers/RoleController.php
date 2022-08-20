<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\role;
use App\Http\Controllers\Controller;
class RoleController extends Controller
{
      //##################  creer nouveux role  ####################
      public function ajouterrole(Request $request){
   
        $role = new role([

            'Role' => $request->Role,
          
         
            
             ]);
  
      
       
           
          $save = $role->save();
  
          if( $save ){
            
              return response()->json($role);
          }else{
           
            return response()->json(['message'=>'le role n\'est pas ajouter'],404);
              
          } 
      
      
      
      }


      
 //##################  supprimer role  ####################
      public function supprimerrole(Request $request,$id){
  
          $role=role::find($id);
          if(is_null($role)){
              return response()->json(['message'=>'role ne trouve pas'],404);
          }
          $role->delete();
          return response()->json(['message'=>'role est supprimer'],200);
          
          
      }



//##################  Modifier de role  ####################

      public function modifierrole(Request $request,$id){
          
          $role=role::find($id);
          if(is_null($role)){
              return response()->json(['message'=>'role ne trouve pas'],404);
          }
          $role->update($request->all());
          return response($role,200);
  
      }


//##################  selectionner tous les role  ####################
      public function getTousroles(Request $request){
          $role=role::withTrashed()->get();
          return response()->json($role,200);
          
   
       }


//##################  selectionner les role n'est pas supprimer  ####################
       public function getrole(){
          return response()->json(role::all(),200);}

        //   ###################################updateDELETErole#########################
        public function updateDELETErole($id){
            $role=DB::table('roles')->where('id', $id)->update(['deleted_at' => null]);
            return response($role,200);
        }
         //######################### Recherche role par id #####################################
 public function getRoleById($id){
    $role=role::find($id);
    if(is_null($role)){
        return response()->json(['message'=>'role introvable'],404);
    }
    return response()->json(role::find($id),200);
}

}
