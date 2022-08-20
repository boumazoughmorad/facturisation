<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Models\categorie;
use App\Models\lignerole;
class categorieController extends Controller
{
      //##################  creer nouveux categorie  ####################
      public function ajoutercategorie(Request $request){
      
        $categorie = new categorie([ 
            // 'id_user'=>$request->id_user;
          'Nom_categorie' => $request->Nom_categorie,
          'id_user' => $request->id_user,
           ]);
           
          $save = $categorie->save();
  
          if( $save ){
            
              return response()->json($categorie);
          }else{
           
            return response()->json(['message'=>'le categorie n\'est pas ajouter'],404);
              
          } 
      
      
      
      }


      
 //##################  supprimer categorie  ####################
      public function supprimercategorie(Request $request,$id){
  
          $categorie=categorie::find($id);
          if(is_null($categorie)){
              return response()->json(['message'=>'categorie ne trouve pas'],404);
          }
          $categorie->delete();
          return response()->json(['message'=>'categorie est supprimer'],405);
          
          
      }



//##################  Modifier de categorie  ####################

      public function modifiercategorie(Request $request,$id){
       
          $categorie=categorie::find($id);
          if(is_null($categorie)){
              return response()->json(['message'=>'categorie ne trouve pas'],404);
          }
          $categorie->update($request->all());
          return response($categorie,200);
  
      }


//##################  count All gategories  ####################
      public function count_ALLcategories(){
        // $categorie=categorie::withTrashed()->get();
        // return response()->json($categorie,200);
        // $categorie = categorie::join('users', 'ligneroles.id_user', '=', 'users.id')
        //     ->->get(['users.*', 'posts.descrption']);
        $categorie1=categorie::count();
            
        $categorie= DB::table('categories')
            ->select(['categories.*']) ->count();
            $data=[
               
                "nonsupprimar"=>$categorie1,"tous"=> $categorie,
                
               
        ];
        //   $categorie=categorie::withTrashed()->get();
          return response()->json($data,200);
          
   
       }
//##################  selectionner tous les categorie  ####################
public function voirTouscategories(Request $request){
    $categorie=categorie::withTrashed()->get();
    return response()->json($categorie,200);
    // $categorie = categorie::join('users', 'ligneroles.id_user', '=', 'users.id')
    //     ->->get(['users.*', 'posts.descrption']);
  
        
    //     DB::table('categories')->join('produits', 'produits.id_categorier', '=', 'categories.id')
    //     ->select(['categories.*',DB::raw('count(produits.id)')]) ->groupBy('categories.id','produits.id_categorier','categories.Nom_categorie','categories.created_at','categories.updated_at','categories.deleted_at')->get();
    //   $categorie=categorie::withTrashed()->get();
    //   return response()->json($categorie,200);
      

   }

//##################  selectionner les categorie n'est pas supprimer  ####################
       public function voircategorie(){
          return response()->json(categorie::all(),200);}
   //##################  donner les categorie bar id  ####################
       public function findcategoriesBYID($id){
        $categorie=categorie::find($id);
        if(is_null($categorie)){
            return response()->json(['message'=>'categorie introvable'],404);
        }
        return response()->json(categorie::find($id),200);
    
    }
      //##################  donner les categorie bar idUser  ####################
      public function findcategoriesBYID_USER($id){
        // $categorie = categorie::join('produits', 'produits.id_categorier', '=', 'categories.id')
        // ->where('id_user','=',$id)->get();
        $user = lignerole::join('users', 'ligneroles.id_user', '=', 'users.id')->join('roles', 'ligneroles.id_role', '=', 'roles.id')
        ->where('Role','=','admin')->get();
        // return response()->json($user[0]->id_user,200);

        $categorie = DB::table('categories')->where('id_user','=',$id)->orWhere('id_user','=',$user[0]->id_user)->get();
        return response()->json($categorie,200);
    
    }
    // ########################################
    public function statiquecategories(){
    $categorie = DB::table("categories")
    ->select(DB::raw("COUNT(*) as value,Nom_categorie as name"))
    ->join('produits', function ($join) {
        $join->on('categories.id', '=', 'produits.id_categorier');
    })
 
    // ->whereYear('categories.created_at', '=', date('Y')-2)
    ->groupBy(DB::raw("Nom_categorie"))
    ->orderBy('value','DESC')
    ->get();
    return response()->json($categorie,200);
    }
        // ########################################
        public function statiquecategoriesByID($id){
            $categorie = DB::table("categories")
            ->select(DB::raw("COUNT(*) as value,Nom_categorie as name"))
            ->join('produits', function ($join) {
                $join->on('categories.id', '=', 'produits.id_categorier');
            })
            ->where('produits.id_user','=',$id)
            // ->whereYear('categories.created_at', '=', date('Y')-2)
            ->groupBy(DB::raw("Nom_categorie"))
            ->orderBy('value','DESC')
            ->get();
            return response()->json($categorie,200);
            }
    // ##########################################
    public function statistiquecategories3annees(){

            $categorie = DB::table("categories")
            ->select(DB::raw("COUNT(*) as value,Nom_categorie as name"))
            ->join('produits', function ($join) {
                $join->on('categories.id', '=', 'produits.id_categorier');
            })
         
            ->whereYear('categories.created_at', '=', date('Y'))
            ->groupBy(DB::raw("Nom_categorie"))
            ->orderBy('value','DESC')
            ->get();

            $categorie1 = DB::table("categories")
            ->select(DB::raw("COUNT(*) as value,Nom_categorie as name"))
            ->join('produits', function ($join) {
                $join->on('categories.id', '=', 'produits.id_categorier');
            })
         
            ->whereYear('produits.created_at', '=', date('Y')-1)
            ->groupBy(DB::raw("Nom_categorie"))
            ->orderBy('value','DESC')
            ->get();


            $categorie2 = DB::table("categories")
            ->select(DB::raw("COUNT(*) as value,Nom_categorie as name"))
            ->join('produits', function ($join) {
                $join->on('produits.id', '=', 'produits.id_categorier');
            })
         
            ->whereYear('produits.created_at', '=', date('Y')-2)
            ->groupBy(DB::raw("Nom_categorie"))
            ->orderBy('value','DESC')
            ->get();
      $data=[
       [ 'name'=>date('Y'),
        'series'=> $categorie
      ],
       [ 'name'=>date('Y')-1,
       'series'=> $categorie1
    ],
    [ 'name'=>date('Y')-2,
    'series'=> $categorie2
   ]

      ];
      
            return response()->json($data,200);
    
    
         
    
            
            }
}
