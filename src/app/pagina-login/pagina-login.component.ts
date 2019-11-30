import { Component, OnInit } from '@angular/core';
import { Credential, AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {

  credential:Credential = {email:"", password:""};
  messageError:string = ""
  constructor(private authentication:AuthenticationService) { }

  ngOnInit() {
  }

  async loginHandler(){
    try{
      await this.authentication.login(this.credential);
      this.messageError = "";
    }catch(error){
      this.messageError = "E-mail ou senha inválidos.";
    }

  }

}
