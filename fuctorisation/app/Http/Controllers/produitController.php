<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\produit;
use DB;
use App\Http\Controllers\Controller;
class produitController extends Controller
{
     //##################  creer nouveux produit  ####################
     public function ajouterproduit(Request $request){
      if (empty($request->Taux_TVA)) {
        $produit = new produit([

            'id_categorier' => $request->id_categorier,
            'Nom_produit' => $request->Nom_produit,
            'reference' => $request->reference,
            'prix_unitaire_TTC' => $request->prix_unitaire_TTC,
            'id_user' => $request->id_user,
         
            
             ]);
  
      }else {
        $produit = new produit([

            'id_categorier' => $request->id_categorier,
            'Nom_produit' => $request->Nom_produit,
            'reference' => $request->reference,
            'prix_unitaire_TTC' => $request->prix_unitaire_TTC,
            'id_user' => $request->id_user,
            'Taux_TVA' => $request->Taux_TVA,
            
             ]);
      }
       
           
          $save = $produit->save();
  
          if( $save ){
            
              return response()->json($produit);
          }else{
           
            return response()->json(['message'=>'le produit n\'est pas ajouter'],404);
              
          } 
      
      
      
      }


      
 //##################  supprimer produit  ####################
      public function supprimerproduit(Request $request,$id){
  
          $produit=produit::find($id);
          if(is_null($produit)){
              return response()->json(['message'=>'produit ne trouve pas'],404);
          }
          $produit->delete();
          return response()->json(['message'=>'produit est supprimer'],200);
          
          
      }



//##################  Modifier de produit  ####################

      public function modifierproduit(Request $request,$id){
       
          $produit=produit::find($id);
   
          if(is_null($produit)){
              return response()->json(['message'=>'produit ne trouve pas'],404);
          }
       
          $produit->update($request->all());
          return response($produit,200);
  
      }
//##################  update datedelete_up de produit  ####################

public function updateDELETEproduit($id){
       
    // $produit=produit::find($id);

    // if(is_null($produit)){
    //     return response()->json(['message'=>'produit ne trouve pas'],404);
    // }
 
    // $produit->update($request->all());
    $produit=DB::table('produits')->where('id', $id)->update(['deleted_at' => null]);
    return response($produit,200);

}


//##################  selectionner tous les produit  ####################   DB::table('produit')
        //   ->where('id', $user->id)
        //   ->update(['active' => true]);
      public function getTousproduits(Request $request){
          $produit=produit::withTrashed()->get();
          return response()->json($produit,200);
          
   
       }


//##################  selectionner les produit n'est pas supprimer  ####################
       public function getproduit($id){
          return response()->json(DB::table('produits')->where('id_user','=',$id)->get(),200);}

    //######################### Recherche produit par id #####################################
public function getproduitById($id){
    $produit=produit::find($id);
    if(is_null($produit)){
        return response()->json(['message'=>'produit introvable'],404);
    }
    return response()->json(produit::find($id),200);
}
       
   //##################  count produit  ####################
   public function count_produit($id){
    $result = DB::table('produits')->where('id_categorier','=',$id)->count();
    return response()->json($result,200);
}       
        //##################  count All   ####################
        public function count_ALLproduit(){

            $produit1=produit::count();
                
            $produit= DB::table('produits')
                ->select(['produits.*']) ->count();
                $data=[
                   
                    "nonsupprimar"=>$produit1,"tous"=> $produit,
                    
                   
            ];
     
              return response()->json($data,200);}

 public function statistiqueTOP5produit(){
           
                $produit = DB::table("produits")
                ->select(DB::raw("COUNT(*) as value,Nom_produit as name"))
                // ->take(2)
                // ->whereMonth('created_at', '>=', date('m')-4)
                // ->whereYear('created_at', '=', date('Y'))
                ->groupBy(DB::raw("Nom_produit"))
                ->orderBy('value','DESC')->limit(5)
                ->get();
                // $user = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
                // ->where('Role','=','admin')->get();
        
                // $categorie = DB::table('categories')->where('id_user','=',$id)->orWhere('id_user','=',$user[0]->id_user)->get();
                // return response()->json($categorie,200);
          
                return response()->json($produit,200);


             

                
                }
    
}
