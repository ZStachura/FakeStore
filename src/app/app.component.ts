import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './Api.service';
import { User } from './User';
import { TokenService } from './Token.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FakeStore';
  
  users: User[]=[];
  categories: Array<String>=[];
  constructor(private api: ApiService, private storeToken: TokenService, public dialog: MatDialog){}

  ngOnInit(){
    this.api.getUsers().subscribe({next: users=>{this.users=users}})
  }

  logIn(username:String,password:String)
  {
    this.api.logIn(username,password).subscribe((response:String)=>{
      this.storeToken.storeToken(response);
      console.log(response)
    }).unsubscribe();
    this.api.getCategories().subscribe({next: category=>{this.categories=category}})
  }

  getData(name:String)
  {
    const dialogRef=this.dialog.open(DialogComponent,{data: name});
  }
}

