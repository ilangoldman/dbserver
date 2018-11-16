import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from '../../_model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;

  constructor(
    private http: HttpClient
  ) {

  }

  login(user,pwd) {
    return new Promise((resolve,reject) => {
      console.log(environment.server + '/user/auth.php');
      this.http.get<any>(environment.server + '/user/auth.php', { 
        headers: new HttpHeaders({
          'user': user,
          'pwd': pwd,
        }),
        observe: 'response'
      }).subscribe(
          resp => {
            console.log(resp);
            console.log(resp.body);
            console.log(resp.body.data.user == undefined);
            if (resp.body.data.user == undefined) reject('nothing');
            else {
              this.user = new User(resp.body.data);
              console.log(user);
              resolve(resp.body.data);
            }
          },
          error => reject(error)
        );
    });
  }

  cadastro(user,name,pwd) {
    return new Promise((resolve,reject) => {
      this.http.get<any>(environment.server + '/user/create.php', { 
        headers: new HttpHeaders({
          'user': user,
          'name': name,
          'pwd': pwd,
        }),
        observe: 'response'
      }).subscribe(
          resp => {
            resolve()
          },
          error => reject(error)
        );
    });
  }

}
