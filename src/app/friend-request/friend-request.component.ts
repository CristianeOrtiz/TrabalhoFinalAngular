import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {

  public title:string
  public name:string
  public avatar:string

  constructor() { }

  ngOnInit() {
    this.title = 'Pedido de Amizade';
    this.name = 'Maria da Silva';
    this.avatar = 'assets/avatar6.png';
  }
  confirmHandler():void{
    alert('Convite aceito! |:)|');
  }
  rejectHandler():void{
    alert('Convite rejeitado. |:(|');
  }

}
