import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

interface User {
 email: string;
 password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {
    email: 'test@test.com.br',
    password: 'test',
  };

  constructor( public afAuth: AngularFireAuth, public Nav: NavController) { }

  async login() {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );
    console.log(user);
    if (user.user.emailVerified === false) {this.Nav.navigateForward('/comfirmação'); }
     else if (user.user.emailVerified === true) {
      localStorage.setItem('email', user.user.email);
      localStorage.setItem('nome', user.user.displayName);
      this.Nav.navigateForward('/home');
    } else {
      alert('Erro de Validação, Contate ao Suporte.');
    }
  }

  //async logout() {
    //await this.afAuth.auth.signOut();
  //}

  Cadastro() {
    this.Nav.navigateForward('/cadastro');
  }

  ngOnInit() {
  }
}


