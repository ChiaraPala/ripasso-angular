import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIKey = 'AIzaSyBfmMESt6gYf9bOhjZ-tTGzXNpAv7B1Abw'
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`
  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`
  isLoggedIn = true
  isAdmin = true
  user: User 

  constructor(private http: HttpClient) { }
  
  isAuthenticated(){
    return this.isLoggedIn
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  createUser(email: string, id: string, token: string, expirationDate: Date){
    this.user = new User(email, id, token, expirationDate)
    this.isLoggedIn = true
  }

  signUp(email: string, password: string){
    return this.http.post(this.signUpURL, {email: email, password: password, returnSecureToken: true})
  }

  signIn(email: string, password: string){
    return this.http.post(this.signInURL, {email: email, password: password, returnSecureToken: true})
  }

  logout(){
    this.isLoggedIn = false
    this.user = null
    localStorage.removeItem('user')
  }


}
