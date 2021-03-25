import { TemaService } from './../../service/tema.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from './../../model/Tema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema();
  temaId: number;
  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    this.temaId = this.route.snapshot.params['id']
    this.findByIdTema(this.temaId)
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp) => {
      this.tema = resp;
    })
  }

  atualizar(){
    this.temaService.putTema(this.tema).subscribe((resp) => {
      this.tema = resp;
      alert("Tema atualizado com sucesso!");
      this.router.navigate(["/tema"]);
    })
  }

}
