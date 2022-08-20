import { formatNumber, NumberFormatStyle } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';
import { Facture } from 'src/app/entities/facture';
import { UserAuthService } from '../../user/user-auth.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

 
  numbererror:any;
  idUser:any;
  registerForm!: FormGroup;
  submitted = false;
  constructor(private userAuthService:UserAuthService,private formBuilder: FormBuilder) { }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
 

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }}
  ngOnInit(): void {
    this.idUser=this.idUser=this.userAuthService.getUserid();
   
    this.registerForm = this.formBuilder.group({
      phonenumber: ['', [ Validators.required,
       Validators.pattern("^[0-9]*$"),
       Validators.minLength(10), Validators.maxLength(10)]]
   });
  }
  

  valeurNum(event:any){
    Facture.Nom_document=event.target.value;
    // Facture.Nom_document = this.formBuilder.group(
    // event.target.value= ['', Validators.required],
    // event.target.value= [
    //   '',
    //   [
    //     Validators.required,
    //     Validators.minLength(6),
    //     Validators.maxLength(20)
    //   ]]
    // )
    
  }

  valeur_date(event :any){
    Facture.date_échéance=event.target.value;
    console.log(Facture.date_échéance);
    
   
  }
  valeur_date_fac(event:any){
    Facture.date_document=event.target.value;
    console.log(Facture.date_document);
    
  }
  Next(){
    
  }

}
