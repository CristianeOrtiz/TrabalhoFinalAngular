import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  

  constructor(private router:Router, private http:HttpClient) { }

  login(credential:Credential):Promise<boolean>{
    return new Promise((resolve,reject)=>{
      this.http.post<any>('/api/login',credential)
      .subscribe(
        (user)=>{
          this.setUser(user);
          this.router.navigate(['/profile'])
          resolve(true)
        },
      (error)=>{
        reject(false)
      })
    })
}


  private setUser(user:User):void{
    if(user){
      let localStorage = window.localStorage;
      localStorage.setItem("CURRENT_USER",JSON.stringify(user));
      }
  }
  getUser():User | null{
    let localStorage = window.localStorage;
    const data = localStorage.getItem("CURRENT_USER");
    if(data && data.trim().length > 0){
      return JSON.parse(data);
    }
    return null;
  }

  isAuthenticated(){
    return this.getUser() != null;
  }  
  
  logout(){
    let localStorage = window.localStorage;
    localStorage.removeItem("CURRENT_USER");
    this.router.navigateByUrl("/login");
  }
  

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(state.url === '/pagina3'){
      if(this.isAuthenticated()){
        return true;
      }
      this.router.navigateByUrl('/login')
      return false;
    }
  }
}

export interface Credential{
  email:string
  password:string
}

export interface User{
  id?:number
  name:string
  email:string
  password:string
}