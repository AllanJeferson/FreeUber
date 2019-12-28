import {
  NavController,
  ToastController
} from '@ionic/angular';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  AngularFireAuth
} from '@angular/fire/auth';

interface User {
  email ? : string;
  password ? : string;
  username ? : string;
  phone ? : string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  user: User = {
    email: '',
    password: '',
    username: '',
    phone: '',
  };

  constructor(
    public afAuth: AngularFireAuth, public Nav: NavController
  ) {}
  async CriarConta() {
    const phone = this.user.phone;
    const username = this.user.username;
    const email = this.user.email;
    const password = this.user.password;
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    const user2 = await this.afAuth.auth.currentUser;
    user2.updateProfile({
      displayName: username,
    });
    this.Nav.navigateForward('/');
  }
  ngOnInit() {}
}