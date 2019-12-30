import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { Local } from 'protractor/built/driverProviders';

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
    email: '',
    password: '',
  };

  constructor( public afAuth: AngularFireAuth, public Nav: NavController) { }

  async login() {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );
    console.log(user);
    localStorage.setItem('email', user.user.email);
    localStorage.setItem('nome', user.user.displayName);
    if (user.user.emailVerified === false) {this.Nav.navigateForward('/comfirmação'); } else if (user.user.emailVerified === true) {
      this.Nav.navigateForward('/home');
    } else {
      alert('Erro de Validação, Contate ao Suporte.');
    }
  }

 // async logout() {
   // await this.afAuth.auth.signOut();
  // }

  Cadastro() {
    this.Nav.navigateForward('/cadastro');
  }

  ngOnInit() {
  }
}


