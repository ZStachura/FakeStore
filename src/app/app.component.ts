import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './Api.service';
import { User } from './User';
import { TokenService } from './Token.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { LoaderService } from './Loader.service';

import { UntilDestroy, untilDestroyed} from '@ngneat/until-destroy'

@UntilDestroy()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FakeStore';
  
  LoginHeader:boolean=true;
  CategoryHeader:boolean=false;

  users: User[]=[];
  categories: Array<String>=[];
  constructor(private api: ApiService, private storeToken: TokenService, public dialog: MatDialog,private loader:LoaderService){}

  ngOnInit(){
    this.loader.show()
    this.api.getUsers().pipe(untilDestroyed(this)).subscribe({next: users=>{this.users=users,this.loader.hide()}},)
  }

  logIn(username:String,password:String)
  {
    this.loader.show()
    this.LoginHeader=false;
    this.CategoryHeader=true;
    this.api.logIn(username,password).pipe(untilDestroyed(this)).subscribe((response:String)=>{
      this.storeToken.storeToken(response);
      console.log(response)
      this.loader.hide()
    }).unsubscribe();
    this.api.getCategories().pipe(untilDestroyed(this)).subscribe({next: category=>{this.categories=category,this.loader.hide()}})
  }

  getData(name:String)
  {
    const dialogRef=this.dialog.open(DialogComponent,{data: name});
  }
}

