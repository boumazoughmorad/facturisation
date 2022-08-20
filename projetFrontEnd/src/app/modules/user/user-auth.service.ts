import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private encryptSecretKey  = "ITICSOLITION"

  constructor() { }
  setRoles(roles: any) {
    // localStorage.setItem('roles', this.encryptData(roles));
    localStorage.setItem('roles', roles);
  }

  getRoles():any  {
    // return this.decryptData( localStorage.getItem('roles') as any )
    // return this.decryptData( localStorage.getItem('roles') as any )
    return  localStorage.getItem('roles') ;

    
  }

  setPermissions(permissions: []) {
    // localStorage.setItem('permissions', this.encryptData(permissions));
    localStorage.setItem('permissions', "zzzz");
  }

  getPermissions(): [] {
    // return this.decryptData(localStorage.getItem('permissions') as any);
    return localStorage.getItem('permissions')as any;
  }

  setUserName(userName:string){
    // localStorage.setItem('userName', this.encryptData(userName));
    localStorage.setItem('userName', userName);
  }
  setUserid(userid:string){
    // localStorage.setItem('userName', this.encryptData(userid));
    localStorage.setItem('userid', userid);
  }
  getUserName() {
    // return this.decryptData( localStorage.getItem('userName') );
    return localStorage.getItem('userName');
  }
  getUserid() {
    // return this.decryptData( localStorage.getItem('userid') );
    return localStorage.getItem('userid');
  }
  setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  clear() {
    localStorage.clear();
  }

  isLoggedIn() {
    if(this.getRoles() && this.getToken()){
      return true;
    }
    else{
      return false;
    }
  }

  

   private encryptData(data: any) {
    // return CryptoJS.AES.encrypt(data, this.encryptSecretKey.trim()).toString();
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      return "hello"
    }
  }

  // private decryptData(data:any) {
  //   return CryptoJS.AES.decrypt(data, this.encryptSecretKey.trim()).toString(CryptoJS.enc.Utf8);
 
  //   try {
  //     const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
  //     // return bytes.toString(CryptoJS.enc.Utf16LE);
  //     if (bytes.toString()) {
  //       return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //     }
  //     return data;
  //   } catch (e) {
  //     return "hello"
  //   }
  // }

  
  

  
}
