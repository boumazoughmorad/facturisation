<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\img;
use DB;
use App\Http\Controllers\Controller;
class imgController extends Controller
{
    public function addimgSoc(Request $request){
        if ($file = $request->file('image_societé')) {
    if($request->hasFile('image_societé')){
    
     
        $path=Storage::disk('public')->putFile('Img',$file);
        
    
   }}else {
    $path="";
   }


   $img= new img();
   $img->image_societé=$path;
   $save=$img->save();
   if( $save ){
      

    return response()->json($img);
    }else{
     
      return response()->json(['message'=>'img n\'est pas enregestrer'],404);
        
    }

}
public function getImg(Request $request){
    $img=img::withTrashed()->get();
    
    return response()->json($img[count($img)-1],200);
    // $result = DB::table('imgs')->where('id = cont(')->first();
    
    // if(is_null($result)){
    //     return response()->json(['message'=>'User ne trouve pas'],404);
    // }
    // return response()->json($result,200);


 }
}
