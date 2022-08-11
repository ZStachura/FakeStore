import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, mergeMap, Observable, of, retry, retryWhen, tap, throwError } from 'rxjs';
import { User } from './User';
import { SearchData } from './searchData';
import { TokenService } from './Token.service';
import { CategoryData } from './CategoryData';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RetryDialogComponent } from './retryDialog/retryDialog.component';

@Injectable({
    providedIn:'root'
})
export class ApiService {

constructor(private http: HttpClient, private token:TokenService, public dialog: MatDialog) { }


getUsers():Observable<User[]>
{
    return this.http.get<User[]>('https://fakestoreapi.com/users').pipe(
        catchError(err=>{
            console.log(err)
            const dialogRef=this.dialog.open(RetryDialogComponent)
            dialogRef.afterClosed().subscribe(res => {
               if(res==true)
            {
                alert(res);
                this.getUsers();
            } })
            return ([])
        })
    )
}

logIn(username:String,password:String):Observable<any>
{
    const body={
        username: username,
        password: password
    }
    return this.http.post<any>('https://fakestoreapi.com/auth/login',body).pipe(
        catchError(err=>{
            console.log(err)
            const dialogRef=this.dialog.open(RetryDialogComponent)
            dialogRef.afterClosed().subscribe(res => {
               if(res==true)
            {
                alert(res);
                this.logIn(username,password);
            } })
            return ([])
        })
    )

}

getCategories():Observable<any>
{
    return this.http.get<any>('https://fakestoreapi.com/products/categories').pipe(
        catchError(err=>{
            console.log(err)
            const dialogRef=this.dialog.open(RetryDialogComponent)
            dialogRef.afterClosed().subscribe(res => {
            alert(res);
            {
                alert(res);
                this.getCategories()
            } }
            )
            return ([])}
    )
    )
}

getData(category:String):Observable<CategoryData[]>
{
    return this.http.get<CategoryData[]>(`https://fakestoreapi.com/products/category/${category}`).pipe(
        catchError(err=>{
            console.log(err)
            const dialogRef=this.dialog.open(RetryDialogComponent)
            dialogRef.afterClosed().subscribe(res => {
            if(res==true)
            {
                alert(res);
                this.getData(category)
            } })
            return ([])}
    ))
}

searchData(text:any):Observable<SearchData[]>
{
    console.log(`https://dummyjson.com/products/search?q=${text}`)
    return this.http.get<SearchData[]>(`https://dummyjson.com/products/search?q=${text}`).pipe(
        catchError(err=>{
            console.log(err)
            const dialogRef=this.dialog.open(RetryDialogComponent)
            dialogRef.afterClosed().subscribe(res => {
            if(res==true)
            {
                alert(res);
                this.searchData(text)
            } })
            return ([])}
    ))
}

}
