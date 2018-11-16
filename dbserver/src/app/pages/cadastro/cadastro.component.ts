import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_service/auth/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  config = 'cadastro';
  loginStatus = '';
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cadastro(usuario,nome, senha) {
    this.auth.cadastro(usuario, nome, senha)
      .then( (res) => {
        this.router.navigate(['/']);
      }).catch( (err) => {
        console.log(err);
        this.loginStatus = 'erro';
    });
  }

  goto(url) {
    this.router.navigate([url]);
  }

  clearErro() {
    this.loginStatus = '';
  }


}
