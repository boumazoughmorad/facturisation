<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Models\lignerole;
use App\Models\role;
class userController extends Controller
{
    //########################  afficher user #############################
    public function getuser(){
        return response()->json(User::all(),200);
    }


    //##################### ajouter user ##################################
    public function signup(Request $request)
    {
        if ($file = $request->file('image_path')) {
            if($request->hasFile('image_path')){
                   $path=Storage::disk('public')->putFile('User',$file);
               
              }
        }else{
            $path= 'User/itic.jpg';
        }
  
       $user = new User([
            'nom_socieite' => $request->nom_socieite,
            'email' => $request->email,
           'password' => bcrypt($request->password),
           'ICE_user' => $request->ICE_user,
          'TF' => $request->TF,
          'CNSS' => $request->CNSS,
          'TP' => $request->TP,
          'capitale' => $request->capitale,
          'TEL1' => $request->TEL1,
          'TEL2' => $request->TEL2,
          'FIX' => $request->FIX,
          'sit_web' => $request->sit_web,
          'Adresse' => $request->Adresse,

        ]);
        $user->image_path=$path;
        $save=$user->save();
        
        if( $save ){
      

        return response()->json($user);
        }else{
         
          return response()->json(['message'=>'user n\'est pas enregestrer'],404);
            
        }
    }
//############################## authentifaction ############################

public function login(Request $request)
{
    // $request->validate([
    //     'email' => 'email|required',
    //     'password' => 'required'
    // ]);

    $credentials = request(['email', 'password']);
     if (!auth()->attempt($credentials)) {
        $user = User::where('email', $request->email)->first();
        if($user){
            return response()->json([
                'message' => 'password incorrecte',
                'errors' => [
                    'password' => [
                        'Invalid paassword'
                    ],
                ]
            ], 422);
        }
        else{
        return response()->json([
            'message' => 'email incorrecte',
            'errors' => [
                'email' => [
                    'Invalid email'
                ],
            ]
        ], 422);}
    }



    $user = User::where('email', $request->email)->first();
    // $user->AUTH=true;
    // // $user->update($user->all());
    // $user->update($user->all());
    // lupdateAuth($user->id);
    // $lignerole=lignerole::find($user->id); 
    $lignerole = DB::table('ligneroles')->where('id_user','=',$user->id)->first();
    $Role=role::find($lignerole->id_role);
    $authToken = $user->createToken('auth-token')->plainTextToken;
    $id=$user->id;
    // '',

    return response()->json([
        'role'=>$Role->Role,
        "Username"=>$user->nom_socieite,
        'token' => $authToken,
        'idUser'=>$id,
    ]);
}
// ############################################################################"
public function lupdateAuth($id){
    $user = User::where('id', $id)->first();
    $user->AUTH=0;
  
    $user->update($user->all());
}
//################################### logout #############################################
public function logout(Request $request)
{
    $request->user()->token()->revoke();
    return response()->json([
        'message' => 'Successfully logged out',
    ]);
}

 //##################  supprimer user  ####################
 public function supprimeruser(Request $request,$id){
  
    $user=User::find($id);
    if(is_null($user)){
        return response()->json(['message'=>'user ne trouve pas'],404);
    }
    $user->delete();
    return response()->json(['message'=>'user est supprimer'],200);
    
    
}



//##################  Modifier de user  ####################

public function modifieruser(Request $request,$id){
 
    $user=User::find($id);
    if(is_null($user)){
        return response()->json(['message'=>'user ne trouve pas'],404);
    }
    $user->update($request->all());
    return response($user,200);

}


//##################  selectionner tous les user  ####################
public function getToususers(Request $request){
    $user=User::withTrashed()->get();
    return response()->json($user,200);
    

 }

 //######################### Recherche user par id #####################################
public function getUserById($id){
    $User=User::find($id);
    if(is_null($User)){
        return response()->json(['message'=>'User introvable'],404);
    }
    return response()->json(User::find($id),200);
}

 //######################### Recherche user par nom #####################################
 public function getUserByNom($nom){
    $result = DB::table('users')->where('nom_socieite','LIKE','%'.$nom.'%')->get();
    
    if(is_null($result)){
        return response()->json(['message'=>'User ne trouve pas'],404);
    }
    return response()->json($result,200);
}

 //######################### Recherche user par email #####################################
 public function getUserByemail($email){
    $result = DB::table('users')->where('email','LIKE',$email)->first();
    
    if(is_null($result)){
        return response()->json(['message'=>'User ne trouve pas'],404);
    }
    return response()->json($result,200);
}

 //######################### Recherche user par ICE #####################################
 public function getUserByICE($ICE_user){
    
   
    $result = DB::table('users')->where('ICE_user','LIKE',$ICE_user)->get();
    
    if(is_null($result)){
        return response()->json(['message'=>'User ne trouve pas'],404);
    }
    return response()->json($result,200);
}
public function statistiqueUser4monis(){
//     $check_friend_request = DB::table("users")
// ->where("request_sent_by_id", Auth::user()->user_id && "request_sent_to_id", $curUserID[1]);
// $users = DB::table("users")
// ->select(DB::raw("COUNT(*) as count, month(created_at) as month"))
// ->where(DB::raw("DATE(created_at) = '".date('Y-m-d')."'"))
// ->groupBy(DB::raw("month(created_at)"))
// ->get();
// DATE_FORMAT('2018-09-24', %M %Y')
$users = DB::table("users")
->select(DB::raw("COUNT(*) as value,MONTH(created_at) as name"))
// ->where(DB::raw("DATE(created_at) = ",date('Y-m-d')))
// ->where('created_at', '>=', date('Y-m-4-d').' 00:00:00')
// ->whereDay('created_at', '=', date('d'))
->whereMonth('created_at', '>=', date('m')-4)
->whereYear('created_at', '=', date('Y'))
->groupBy(DB::raw("month(created_at)"))
->get();
// $users= user::get()
//    ->groupBy(function($item) {
//     return $item->created_at->month;
// });

// $users  = DB::table("users")
// ->where("request_sent_by_id", Auth::user()->user_id && "request_sent_to_id", $curUserID[1]);
return response()->json($users,200);

}

// ####################################################Nember User Auth #############################

public function NemberUserAuth(){

$users = DB::table("users")
->select(DB::raw("COUNT(*) as name"))

->where('AUTH', '=', true)

->get();

return response()->json($users,200);

}
}
