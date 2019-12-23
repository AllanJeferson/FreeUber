import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CadastroPage } from '../cadastro/cadastro.page';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public Nav: NavController) { }




  ngOnInit() {
  }

  Cadastro() {
    this.Nav.navigateForward('/cadastro');

  }

}


