import { Tema } from './../model/Tema';
import { TemaService } from './../service/tema.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema();
  listaTema: Tema[];

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){

    this.findAllTemas();
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp) =>{
      this.tema = resp;
      alert("Tema cadastrado com sucesso!");
      this.tema = new Tema();
      this.findAllTemas();
    })
  }

}
