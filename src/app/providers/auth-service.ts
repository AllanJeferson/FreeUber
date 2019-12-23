import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;

    constructor(public angularFireAuth: AngularFireAuth) {
        this.user = angularFireAuth.authState;
    }
    CriarUsuario(user: User) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
}
