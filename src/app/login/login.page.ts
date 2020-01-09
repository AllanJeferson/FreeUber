import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

interface User {
 email: string;
 password: string;
 loginError: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = {
    email: '',
    password: '',
    loginError: ''
  };

  constructor( public afAuth: AngularFireAuth, public Nav: NavController) { }


  async login() {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password,
    ).then(
      () => this.Nav.navigateForward('home'),
      error => this.user.loginError = 'E-mail ou Senha Invalidos'
    );
// bem vindo {{afAuth.auth.currentUser.displayName}} para mostrar o nome
    console.log( this.afAuth.auth.currentUser);
  }

  // async logout() {
    // await this.afAuth.auth.signOut();
  // }

  Cadastro() {
    this.Nav.navigateForward('/cadastro');
  }

  ngOnInit() {
    if (this.afAuth.auth.currentUser) {
      this.Nav.navigateForward('/home');
    } else {
    }
  }
}


