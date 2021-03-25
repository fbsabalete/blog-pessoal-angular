import { Router } from '@angular/router';
import { environment } from './../environments/environment.prod';
import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(["/login"])
    }
  }
}
