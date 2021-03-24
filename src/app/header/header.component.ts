import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nome = environment.nome;
  foto = environment.foto;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  sair(){
    environment.foto = '';
    environment.nome = '';
    environment.token = '';
    environment.id = 0;

    this.router.navigate(["/login"])
  }

}
