import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth/auth.service';
import { Router } from '@angular/router';
import { BusinessService } from '../_service/business/business.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databases:any = [];

  constructor(
    private auth: AuthService,
    private db: BusinessService,
    private router: Router
  ) {
    console.log(auth.user);
    if (auth.user == null) this.router.navigate(['']);
    else {
      this.getDB();
    }    
  }

  getDB() {
    this.db.getDB(this.auth.user).then((res) => {
      this.databases = res;
    }).catch((err) => {
      this.databases = [];
      console.log(err)
    });
  }

  ngOnInit() {
  }

  delete(data) {
    this.db.delDB(this.auth.user,data).then((res) => {
      this.getDB();
    }).catch((err) => console.log(err));
  }

  create(data) {
    this.db.createDB(this.auth.user,data).then((res) => {
      this.getDB();
    }).catch((err) => console.log(err));
  }

  logout() {
    this.router.navigate(['/']);
  }

}
