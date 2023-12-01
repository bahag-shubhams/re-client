import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs: AngularFireAuth) { }
  
  registerWithEmailAndPassword(user: {email: string, password: string} ){ 
   return this.afs.createUserWithEmailAndPassword(user.email,user.password);
  }
  signWithEmailAndPassword(user: {email: string, password: string} ){ 
    return this.afs.signInWithEmailAndPassword(user.email,user.password);
   }
}
