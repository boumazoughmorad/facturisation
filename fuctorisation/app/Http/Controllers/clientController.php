<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\client;
use DB;
class clientController extends Controller
{
    
    //##################  creer nouveux client  ####################
    public function ajouterClient(Request $request){
      
              $client = new client([

                'ICE' => $request->ICE,
                'Nom_client' => $request->Nom_client,
                'Adresse_client' => $request->Adresse_client,
                'tele_client' => $request->tele_client,
                'id_user' => $request->id_user,
                
                 ]);
                 
                $save = $client->save();
        
                if( $save ){
                  
                    return response()->json($client);
                }else{
                 
                  return response()->json(['message'=>'le client n\'est pas ajouter'],404);
                    
                } 
            
            
            
            }


            
       //##################  supprimer client  ####################
            public function supprimerClient(Request $request,$id){
        
                $client=client::find($id);
                if(is_null($client)){
                    return response()->json(['message'=>'client ne trouve pas'],404);
                }
                $client->delete();
                return response()->json(['message'=>'client est supprimer'],200);
                
                
            }



     //##################  Modifier de client  ####################

            public function modifierclient(Request $request,$id){
             
                $client=client::find($id);
                if(is_null($client)){
                    return response()->json(['message'=>'client ne trouve pas'],404);
                }
                $client->update($request->all());
                return response($client,200);
        
            }


    //##################  selectionner tous les client  ####################
            public function getTousclients(Request $request){
                $client=client::withTrashed()->get();
                return response()->json($client,200);
                
         
             }
 //######################### Recherche client par id #####################################
 public function getclientById($id){
    $client=client::find($id);
    if(is_null($client)){
        return response()->json(['message'=>'client introvable'],404);
    }
    return response()->json(client::find($id),200);
}


  //##################  selectionner les client n'est pas supprimer  ####################
             public function getclient(){
                return response()->json(client::all(),200);}

//##################  afficher les client by idUser  ####################
         public function getclientsbyiduser($id){
    $result = DB::table('clients')->where('id_user','=',$id)->get();

           
        return response()->json($result,200);
        }
        //##################  count All   ####################
      public function count_ALLClient(){

        $client1=client::count();
            
        $client= DB::table('clients')
            ->select(['clients.*']) ->count();
            $data=[
               
                "nonsupprimar"=>$client1,"tous"=> $client,
                
               
        ];
 
          return response()->json($data,200);}
}
