import { Component, OnInit } from '@angular/core';
import {Profile} from './profile';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile: Profile
  public profiles: Array<Profile> = []


  constructor() { }


  public nome: string;
  public email: string;
  public profissao: string;
  public idade: number;

  ngOnInit() {
    this.profile = new Profile('Cristiane', 
                              'cristianepavlak@hotmail.com',
                              'Analista Desenvolvedor Junior',
                              21,
                              'assets/avatar3.png'),
    this.nome = 'Cristiane Ortiz'
    this.email = 'cristianepavlak@hotmail.com'
    this.profissao = 'Analista Desenvolvedor Junior'
    this.idade = 21;
    this.iniciarProfiles();
    
  }

  iniciarProfiles():void{
    this.profiles.push(new Profile(
      'Cristiane',
      'cristianepavlak@hotmail.com',
      'Analista Desenvolvedor Junior',
      21,
      'assets/avatar3.png'));

    this.profiles.push(new Profile(
      'Junior',
      'juniorsousa@hotmail.com',
      'Analista Desenvolvedor Junior',
      24,
      'assets/avatar3.png'));
    this.profiles.push(new Profile(
      'João',
      'joaosilva@hotmail.com',
      'Médico',
      30,
      'assets/avatar3.png'));

  }

  showName():void{
    alert(`O nome do profile é ${this.profile.nome}`)
  }

  changeEmailHandler(event):void{
    this.profile.email = event.target.value
  }

}
