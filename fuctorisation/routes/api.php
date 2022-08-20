<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\clientController;
use App\Http\Controllers\categorieController;
use App\Http\Controllers\produitController;
use App\Http\Controllers\documentController;

use App\Http\Controllers\LignedocumentController;
use App\Http\Controllers\reglementController;
use App\Http\Controllers\bayController;
use App\Http\Controllers\userController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ligneroleController;
use App\Http\Controllers\imgController; 
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

///  ##########################"       CLIENT    #####################################
Route::post('ajouterClient',[clientController::class,'ajouterClient']);
Route::delete('supprimerClient/{id}',[clientController::class,'supprimerClient']);
Route::put('modifierclient/{id}',[clientController::class,'modifierclient']);
Route::get('voirtousclient',[clientController::class,'getTousclients']);
Route::get('voirclient',[clientController::class,'getclient']);
Route::get('getclientsbyiduser/{id}',[clientController::class,'getclientsbyiduser']);
Route::get('getclientById/{id}',[clientController::class,'getclientById']);
Route::get('count_ALLClient',[clientController::class,'count_ALLClient']);

///  ###################################################################################


///  ##########################"       CATEGORIES    #####################################
Route::post('ajoutercategorie',[categorieController::class,'ajoutercategorie']);
Route::delete('supprimercategorie/{id}',[categorieController::class,'supprimercategorie']);
Route::put('modifiercategorie/{id}',[categorieController::class,'modifiercategorie']);
Route::get('voirtouscategorie',[categorieController::class,'voirTouscategories']);
Route::get('voircategorie',[categorieController::class,'voircategorie']);
Route::get('findcategoriesBYID/{id}',[categorieController::class,'findcategoriesBYID']); 
Route::get('findcategoriesBYID_USER/{id}',[categorieController::class,'findcategoriesBYID_USER']); 
Route::get('count_ALLcategories',[categorieController::class,'count_ALLcategories']); 
Route::get('statistiquecategories3annees',[categorieController::class,'statistiquecategories3annees']); 
Route::get('statiquecategories',[categorieController::class,'statiquecategories']); 
Route::get('statiquecategoriesByID/{id}',[categorieController::class,'statiquecategoriesByID']); 

///  #####################################################################################


///  ##########################"       PRDUITS      #####################################
Route::post('ajouterproduit',[produitController::class,'ajouterproduit']);
Route::delete('supprimerproduit/{id}',[produitController::class,'supprimerproduit']);
Route::put('modifierproduit/{id}',[produitController::class,'modifierproduit']);
Route::get('voirtousproduit',[produitController::class,'getTousproduits']);
Route::get('voirproduit/{id}',[produitController::class,'getproduit']); 
Route::get('getproduitById/{id}',[produitController::class,'getproduitById']); 

Route::get('count_produit/{id}',[produitController::class,'count_produit']); 
Route::get('updateDELETEproduit/{id}',[produitController::class,'updateDELETEproduit']); 
Route::get('count_ALLproduit',[produitController::class,'count_ALLproduit']); 
Route::get('statistiqueTOP5produit',[produitController::class,'statistiqueTOP5produit']); 

///  #####################################################################################


///  ##########################"       DOCUMENTS      #####################################
// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::get('voirtousdocument',[documentController::class,'getTousdocuments']);
// });
// Route::get('voirtousdocument',[documentController::class,'getTousdocuments']);

Route::post('ajouterdocument',[documentController::class,'ajouterdocument']);
Route::delete('supprimerdocument/{id}',[documentController::class,'supprimerdocument']);
Route::put('modifierdocument/{id}',[documentController::class,'modifierdocument']);
Route::get('voirtousdocuments',[documentController::class,'getTousdocuments']);
Route::get('voirdocuments',[documentController::class,'getdocument']); 
Route::get('voirdocument/{id}',[documentController::class,'getDocumentById']);
Route::get('count_ALLdocument',[documentController::class,'count_ALLdocument']);
Route::get('statistiquedocument',[documentController::class,'statistiquedocument']);
///  #####################################################################################



///  ##########################"       LINE DE DUCUMENT   #####################################
Route::post('ajouterlignedocument',[LignedocumentController::class,'ajouterlignedocument']);
Route::delete('supprimerlignedocument/{id}',[LignedocumentController::class,'supprimerlignedocument']);
Route::put('modifierlignedocument/{id}',[LignedocumentController::class,'modifierlignedocument']);
Route::get('voirtouslignedocument',[LignedocumentController::class,'getTouslignedocuments']);
Route::get('voirlignedocument',[LignedocumentController::class,'getlignedocument']);
Route::get('getlproduitsByidocument/{id}',[LignedocumentController::class,'getlproduitsByidocument']);
Route::get('getLigneDocumentByIdProduit/{id}',[LignedocumentController::class,'getLigneDocumentByIdProduit']);

///  ##########################################################################################



///  ##########################"       REGLEMENT      #####################################
Route::post('ajouterreglement',[reglementController::class,'ajouterreglement']);
Route::delete('supprimerreglement/{id}',[reglementController::class,'supprimerreglement']);
Route::put('modifierreglement/{id}',[reglementController::class,'modifierreglement']);
Route::get('voirtousreglement',[reglementController::class,'getTousreglements']);
Route::get('voirreglement',[reglementController::class,'getreglement']);
Route::get('getreg_byID_user/{id}',[reglementController::class,'getreg_byID_user']);
Route::get('getcountBay/{id}',[reglementController::class,'getcountBay']);
Route::get('getsumreste/{id}',[reglementController::class,'getsumreste']);
Route::get('getRegById/{id}',[reglementController::class,'getRegById']);

///  #####################################################################################



///  ##########################"       BAYS      #####################################
Route::post('ajouterbay',[bayController::class,'ajouterbay']);
Route::delete('supprimerbay/{id}',[bayController::class,'supprimerbay']);
Route::put('modifierbay/{id}',[bayController::class,'modifierbay']);
Route::get('voirtousbay',[bayController::class,'getTousbays']);
Route::get('voirbay',[bayController::class,'getbay']);
Route::get('getbay_Reg_Doc/{id}',[bayController::class,'getbay_Reg_Doc']);

///  #####################################################################################getbay_Reg_Doc


///  ##########################"       USERS      #####################################
Route::post('ajouteruser',[userController::class,'signup']);
Route::delete('supprimeruser/{id}',[userController::class,'supprimeruser']);
Route::put('modifieruser/{id}',[userController::class,'modifieruser']);
Route::get('voirtoususer',[userController::class,'getToususers']);
Route::get('voiruser',[userController::class,'getuser']);
Route::post('login',[userController::class,'login']); //getUserById
Route::get('getUserByid/{id}',[userController::class,'getUserById']);
Route::get('getUserByNom/{nom}',[userController::class,'getUserByNom']);
Route::get('getUserByemail/{email}',[userController::class,'getUserByemail']);
Route::get('getUserByICE/{ICE_user}',[userController::class,'getUserByICE']);
Route::get('statistiqueUser4monis',[userController::class,'statistiqueUser4monis']);
Route::put('lupdateAuth/{id}',[userController::class,'lupdateAuth']);
Route::get('NemberUserAuth',[userController::class,'NemberUserAuth']);

///  #####################################################################################


///  ##########################"       ROLES      #####################################
Route::post('ajouterrole',[RoleController::class,'ajouterrole']);
Route::delete('supprimerrole/{id}',[RoleController::class,'supprimerrole']);
Route::put('modifierrole/{id}',[RoleController::class,'modifierrole']);
Route::get('voirtousrole',[RoleController::class,'getTousroles']);
Route::get('voirrole',[RoleController::class,'getrole']);
Route::get('updateDELETErole/{id}',[RoleController::class,'updateDELETErole']);
Route::get('getRoleById/{id}',[RoleController::class,'getRoleById']);

///  #####################################################################################



///  ##########################"       LIGNE DE ROLES      #####################################
Route::post('ajouterrolerole',[ligneroleController::class,'ajouterlignerole']);
Route::delete('supprimerrolerole/{id}',[ligneroleController::class,'supprimerlignerole']);
Route::put('modifierrolerole/{id}',[ligneroleController::class,'modifierlignerole']);
Route::get('voirtousrolerole',[ligneroleController::class,'getTousligneroles']);
Route::get('voirrolerole',[ligneroleController::class,'getlignerole']);
Route::get('getinforole/{id}',[ligneroleController::class,'getinforole']);
Route::get('getinfouser',[ligneroleController::class,'getinfouser']);
Route::get('getinfobyiduser/{id}',[ligneroleController::class,'getinfobyiduser']);
Route::get('count_ALLFournisseur',[ligneroleController::class,'count_ALLFournisseur']);

///  #####################################################################################


///  ##########################"       Imginisial     #####################################

Route::post('addimgSoc',[imgController::class,'addimgSoc']);
Route::get('getImg',[imgController::class,'getImg']);
///  #####################################################################################




