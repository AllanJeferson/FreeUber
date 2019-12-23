import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../providers/user';
import { AuthService } from '../providers/auth-service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {
  @ViewChild('form', {
    static: false
  }) form: NgForm;
  user: User = new User();

  constructor(
    public NavCtrl: NavController,
    private toastCtrl: ToastController,
    private authSevice: AuthService,
  ) {   }
  CriarConta() {
    if (this.form.form.valid) {
      this.authSevice.CriarUsuario(this.user)
      .then((user: any) => {
        alert('Cadastro Efetuado Com Sucesso!!!');
      })
      .catch();
     }
  }

  ngOnInit() {
  }

}
