import { Tema } from './../../model/Tema';
import { TemaService } from './../../service/tema.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema();
  temaId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    this.temaId = this.route.snapshot.params["id"];
    this.findByIdTema(this.temaId);
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(this.temaId).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  delete(){
    this.temaService.deleteTema(this.temaId).subscribe(() => {
      alert("Tema apagado com sucesso!");
      this.router.navigate(["/tema"]);
    })
  }

}
