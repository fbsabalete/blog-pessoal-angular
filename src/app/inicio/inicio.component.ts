import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public nome: string = environment.nome;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

  }

}
