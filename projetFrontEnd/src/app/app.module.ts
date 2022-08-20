import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error403Component } from './shared/error_pages/error403/error403.component';
import { HeaderAcceilComponent } from './shared/header-acceil/header-acceil.component';
import { HomeComponent } from './shared/home/home.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';

import { Error404Component } from './shared/error_pages/error404/error404.component';
import { Error500Component } from './shared/error_pages/error500/error500.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DocumentComponent } from './modules/Document/document.component';
import { DocumentModule } from './modules/Document/document.module';
import { ProduitComponent } from './modules/produit/produit.component';
import { AvecOrNonHeaderComponent } from './shared/avec-or-non-header/avec-or-non-header.component';
import { ImprimerComponent } from './shared/imprimer/imprimer.component';
import { UserComponent } from './modules/user/user.component';
import { TestComponent } from './shared/test/test.component';
import { InfoFactureComponent } from './shared/info-facture/info-facture.component';
import { TypeFactureComponent } from './shared/type-facture/type-facture.component';

import { HttpClientModule } from '@angular/common/http';
import { ProposerComponent } from './shared/proposer/proposer.component';
import { SidebarUserAuthComponent } from './shared/sidebar-user-auth/sidebar-user-auth.component';
import { HeaderUserAuthComponent } from './shared/header-user-auth/header-user-auth.component';
import { ReglementComponent } from './modules/reglement/reglement.component';
import { ReglementModule } from './modules/reglement/reglement.module';
import { Facture2Component } from './shared/facture2/facture2.component';
import { HomeAuthComponent } from './shared/home-auth/home-auth.component';
import { CategorierComponent } from './modules/categorier/categorier.component';
import { AddFactureComponent } from './shared/add-facture/add-facture.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPrintModule} from 'ngx-print';
// import { TesterComponent } from './tester/tester.component';
import { DashbordComponent } from './modules/dashbord/dashbord.component';
import { DashbordModule } from './modules/dashbord/dashbord.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';
import { TestComponentComponent } from './test-component/test-component.component';
import { RoleModule } from './modules/role/role.module';
import { RoleComponent } from './modules/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAcceilComponent,
    HomeComponent,
    WelcomePageComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    FooterComponent,

    DocumentComponent,
      ProduitComponent,
      AvecOrNonHeaderComponent,
      ImprimerComponent,
      UserComponent,
      TestComponent,
      InfoFactureComponent,
      TypeFactureComponent,
      ProposerComponent,
      SidebarUserAuthComponent,
      HeaderUserAuthComponent,
      ReglementComponent,
      Facture2Component,
      HomeAuthComponent,
      CategorierComponent,
      AddFactureComponent,
      // TesterComponent,
      TestComponentComponent,
      RoleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DocumentModule,
    HttpClientModule,
    ReglementModule,
    NgxPrintModule,
    DashbordModule,
    QRCodeModule,
    MaterialModule,
   
   
    HttpClientModule,
    FormsModule,
    RouterModule,
    // MaterialModule,
    FlexLayoutModule,
    FormsModule,
RouterModule,

    MatCardModule, 
    NgxChartsModule, RoleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
