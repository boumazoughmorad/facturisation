import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvecOrNonHeaderComponent } from './shared/avec-or-non-header/avec-or-non-header.component';
import { Error403Component } from './shared/error_pages/error403/error403.component';
import { Error500Component } from './shared/error_pages/error500/error500.component';
import { SidebarUserAuthComponent } from './shared/sidebar-user-auth/sidebar-user-auth.component';
import { HomeComponent } from './shared/home/home.component';
import { ImprimerComponent } from './shared/imprimer/imprimer.component';
import { InfoFactureComponent } from './shared/info-facture/info-facture.component';
import { ProposerComponent } from './shared/proposer/proposer.component';
import { TestComponent } from './shared/test/test.component';
import { TypeFactureComponent } from './shared/type-facture/type-facture.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { HeaderUserAuthComponent } from './shared/header-user-auth/header-user-auth.component';
import { HomeAuthComponent } from './shared/home-auth/home-auth.component';
import { AddFactureComponent } from './shared/add-facture/add-facture.component';
// import { TesterComponent } from './tester/tester.component';
import { DashbordComponent } from './modules/dashbord/dashbord.component';
import { Error404Component } from './shared/error_pages/error404/error404.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
 
  {
    
    path:'tester',
    component:TestComponentComponent,
    
  },
  {
    
    path:'error404',
    component:Error404Component,
    
  },
  {
    
    path:'error500',
    component:Error500Component,
    
  },
  {
    
    path:'error403',
    component:Error403Component,
    
  },

  {
    
    path:'nav',
    component:SidebarUserAuthComponent,
    
  },
  {
    
    path:'head',
    component:HeaderUserAuthComponent,
    
  },
  {
    path:'welcome',
    component: HomeAuthComponent,
    //facture
    children:[
      {
        
        path :'',
        loadChildren:()=>import('./modules/dashbord/dashbord.module').then(m => m.DashbordModule),
        // canActivate:[PermissionGuard],
        data:{permissions:['Facture']}
      
         },
         {
        
          path :'Roles',
          loadChildren:()=>import('./modules/role/role.module').then(m => m.RoleModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
           },
      {
        
        path :'facture',
        loadChildren:()=>import('./modules/Document/document.module').then(m => m.DocumentModule),
        // canActivate:[PermissionGuard],
        data:{permissions:['Facture']}
      
         }, 
        //  infoclient
        {
            
          path :'infoclient',
          loadChildren:()=>import('./modules/client/client.module').then(m => m.ClientModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
      },
      {path :'user',
      loadChildren:()=>import('./modules/user/user.module').then(m => m.UserModule),
      // canActivate:[PermissionGuard],
  
    
  },
      {
      
        path :'inforegl',
        loadChildren:()=>import('./modules/reglement/reglement.module').then(m => m.ReglementModule),
        // canActivate:[PermissionGuard],
        data:{permissions:['Facture']}
      
         },
         {
      
          path :'info_categorier',
          loadChildren:()=>import('./modules/categorier/categorier.module').then(m => m.CategorierModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
           },
         
      {
          
        path :'infoProduit',
        loadChildren:()=>import('./modules/produit/produit.module').then(m => m.ProduitModule),
        // canActivate:[PermissionGuard],
        data:{permissions:['Facture']},
       
        
      
       },
       {
        
        path :'imprimer',
    component: ImprimerComponent
      
         },
         {
        
          path :'reglement',
          loadChildren:()=>import('./modules/reglement/reglement.module').then(m => m.ReglementModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
           },
           {       path :'choisi',
           component: WelcomePageComponent},
           {path:'add',
    component: AddFactureComponent,
    children:[
 
      {path :'facture',
      loadChildren:()=>import('./modules/Document/document.module').then(m => m.DocumentModule),
      // canActivate:[PermissionGuard],
      data:{permissions:['Facture']}
    
       }, 
       {
          
        path :'infoProduit',
        loadChildren:()=>import('./modules/produit/produit.module').then(m => m.ProduitModule),
        // canActivate:[PermissionGuard],
        data:{permissions:['Facture']},
       
        
      
       },
       {
            
        path :'infoclient',
        loadChildren:()=>import('./modules/client/client.module').then(m => m.ClientModule),
        // canActivate:[PermissionGuard],
        data:{permissions:['Facture']}
      
    },
 
    {
    
      path :'inforegl',
      loadChildren:()=>import('./modules/reglement/reglement.module').then(m => m.ReglementModule),
      // canActivate:[PermissionGuard],
      data:{permissions:['Facture']}
    
       },
     
    ]
  }
    ]
  },
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'',
        component: WelcomePageComponent
      },
      {
        
        path :'type_facture',

        component: TypeFactureComponent
      
       },
      
    
    
    {
        
    path :'etape_fin',
component: AvecOrNonHeaderComponent
  
     },
     {
        
      path :'imprimer',
  component: ImprimerComponent
    
       },
       {
        
        path :'pro',
    component: ProposerComponent
      
         },
         {
        
          path :'infouser',
          loadChildren:()=>import('./modules/user/user.module').then(m => m.UserModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
           },
         
     
         {
          path:'infofacture',
          component: InfoFactureComponent,
          children:[
            {
        
              path :'',
              loadChildren:()=>import('./modules/Document/document.module').then(m => m.DocumentModule),
              // canActivate:[PermissionGuard],
              data:{permissions:['Facture']}
            
          },
          {
            
            path :'infoclient',
            loadChildren:()=>import('./modules/client/client.module').then(m => m.ClientModule),
            // canActivate:[PermissionGuard],
            data:{permissions:['Facture']}
          
        },
        {
        
          path :'inforegl',
          loadChildren:()=>import('./modules/reglement/reglement.module').then(m => m.ReglementModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
           },
        {
            
          path :'infoProduit',
          loadChildren:()=>import('./modules/produit/produit.module').then(m => m.ProduitModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']},
         
          
        
         },
         {
        
          path :'infouser',
          loadChildren:()=>import('./modules/user/user.module').then(m => m.UserModule),
          // canActivate:[PermissionGuard],
          data:{permissions:['Facture']}
        
           },
       
          ]
          }
  
    
      
    ]

    
  },
  {
        
    path :'test',
component: TestComponent
  
     },
    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
