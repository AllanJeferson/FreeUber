import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {
  @ViewChild('form', {
      static: true
    }) form: NgForm;
    user: User;

  constructor(
    public afAuth: AngularFireAuth,
  ) {   }
  async CriarConta() {
   const user = await this.afAuth.auth.createUserWithEmailAndPassword(
     this.user.email,
     this.user.password,
   );


  }

  ngOnInit() {
   const user = {
     email: '',
     password: '',
   };

  }

}
