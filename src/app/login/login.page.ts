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
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

  Cadastro() {
    this.Nav.navigateForward('/cadastro');
  }

  ngOnInit() {
  }
}


