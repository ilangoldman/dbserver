import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from '../../_model/user';

@Injectable({
  providedIn: 'root'
})
export class BusinessService{

  public constructor(
    private http: HttpClient
  ){

  }

  getDB(user: User) {
    return new Promise((resolve,reject) => {
      this.http.get<any>(environment.server + '/db/get.php', { 
        headers: new HttpHeaders({
          'token': user.user
        }),
        observe: 'response'
      }).subscribe(
          resp => {
            console.log(resp.body);
            console.log(resp.body.data);
            console.log(resp.body.data[0] == undefined);
            if (resp.body.data[0] == undefined) reject('nothing');
            else {
              let db = []
              resp.body.data.forEach(element => {
                db.push(element);
              });
              resolve(db);
            }
          },
          error => reject(error)
        );
    });
  }

  createDB(user: User,db) {
    return new Promise((resolve,reject) => {
      this.http.get<any>(environment.server + '/db/create.php', { 
        headers: new HttpHeaders({
          'token': user.user,
          'username': user.uname,
          'database': db,
        }),
        observe: 'response'
      }).subscribe(
          resp => {
            console.log(resp);
            console.log(resp.body);
            console.log(resp.body.status == undefined);
            if (resp.body.status == undefined || resp.body.status != '201') reject('nothing');
            else {
              resolve();
            }
          },
          error => reject(error)
        );
    });
  }

  delDB(user: User,db) {
    console.log(db);
    console.log(user.user);
    return new Promise((resolve,reject) => {
      this.http.get<any>(environment.server + '/db/delete.php', { 
        headers: new HttpHeaders({
          'token': user.user,
          'database': db,
        }),
        observe: 'response'
      }).subscribe(
          resp => {
            console.log(resp);
            console.log(resp.body);
            if (resp.body == null || resp.body.status != '201') reject('nothing');
            else {
              resolve();
            }
          },
          error => reject(error)
        );
    });
  }

}
