<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lignerole;
use App\Models\role;
use App\Models\User;
use DB;
use App\Http\Controllers\Controller;
class ligneroleController extends Controller
{
    //
     //##################  creer nouveux Ligne lignerole  ####################
     public function ajouterlignerole(Request $request){
      
        # code...
        $lignerole = new lignerole([
  
            'id_role' => $request->id_role,
            'id_user' => $request->id_user,
           
            
            
            
             ]);
      
         
              
         
             
            $save = $lignerole->save();
    
            if( $save ){
              
                return response()->json($lignerole);
            }else{
             
              return response()->json(['message'=>'le lignerole n\'est pas ajouter'],404);
                
            } 
        
        
        
        }
  
  
        
   //##################  supprimer lignerole  ####################
        public function supprimerlignerole(Request $request,$id){
    
            $lignerole=lignerole::find($id);
            if(is_null($lignerole)){
                return response()->json(['message'=>'lignerole ne trouve pas'],404);
            }
            $lignerole->delete();
            return response()->json(['message'=>'lignerole est supprimer'],405);
            
            
        }
  
  
  
  //##################  Modifier de lignerole  ####################
  
        public function modifierlignerole(Request $request,$id){
         
            $lignerole=lignerole::find($id);
            if(is_null($lignerole)){
                return response()->json(['message'=>'lignerole ne trouve pas'],404);
            }
            $lignerole->update($request->all());
            return response($lignerole,200);
    
        }
  
  
  //##################  selectionner tous les lignerole  ####################
        public function getTousligneroles(Request $request){
            $lignerole=lignerole::withTrashed()->get();
            return response()->json($lignerole,200);
            
     
         }
  
  
  //##################  selectionner les lignerole n'est pas supprimer  ####################
         public function getlignerole(){
            return response()->json(lignerole::all(),200);}


   //##################  afficher les information user   ####################
         public function getinforole($id){

            $ligne=lignerole::find($id);
            $user=User::find($ligne->id_user);
        return response()->json($user,200);
        }
  //##################  afficher les information role   ####################
           public function getinfouser(){
            
    // $lignerole = DB::table('users natural join ligneroles')->where('id_role','=','3')->get();
            // $ligne=lignerole::find($id);
            // $role=role::find($ligne->id_role);
            // foreach ($lignerole as  $value) {
            //     # code...
            //     $user=user::find($value->id_user);
            // }
            // $users = User::join('ligneroles', 'ligneroles.user_id', '=', 'users.id')
            //   ->join('comments', 'comments.post_id', '=', 'posts.id')
            //   ->get(['users.*', 'posts.descrption']);
            
            // $lignerole =  DB::table('ligneroles')
            //   ->join('users', 'ligneroles.id_user', '=', 'users.id')
            //   ->where('id_role','=','3')->groupBy('id_user')->get();
            // return response()->json($lignerole,200);
            // $lignerole = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
            // ->get();
       $lignerole = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
            ->get();
            // $lignerole =  DB::raw("SELECT * FROM users NATURAL JOIN ligneroles ");
            return response()->json($lignerole,200);
       
        }
         //##################  afficher les Role by idUser  ####################
         public function getinfobyiduser($id){
            $user = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
->where('id_user','=',$id)->get();
           
        return response()->json($user,200);
        }
         //##################  count All   ####################
 public function count_ALLFournisseur(){

    // $user = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
    // ->where('Role','=','fournisure')->count();
    $user = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
    ->where('Role','=','fournisure')->count();
    $dd=user::all();

    $user1 = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
    ->where('Role','=','fournisure')->whereNull("users.deleted_at") ->count();
    // $user= DB::table('users')->where()
    //     ->select(['users.*']) ->count();,'and','users.deleted_at','=','null'
        $data=[
           
            "nonsupprimar"=>$user1,"tous"=> $user,
            
           
    ];

      return response()->json($data,200);}
 
}
