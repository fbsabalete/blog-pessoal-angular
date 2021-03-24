import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0);
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value;
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario;

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp) => {
        this.user = resp;
        this.router.navigate(["/login"]);
        alert("Usuário cadastrado com sucesso.")
      })
    }
  }



}
