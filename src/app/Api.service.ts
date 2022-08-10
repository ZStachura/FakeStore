import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, mergeMap, Observable, of, retry, retryWhen, tap, throwError } from 'rxjs';
import { User } from './User';
import { TokenService } from './Token.service';
import { CategoryData } from './CategoryData';
import { IfRetryService } from './ifRetry.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RetryDialogComponent } from './retryDialog/retryDialog.component';

@Injectable({
    providedIn:'root'
})
export class ApiService {

constructor(private http: HttpClient, private token:TokenService, private ifretry:IfRetryService, public dialog: MatDialog) { }


getUsers():Observable<User[]>
{
    return this.http.get<User[]>('https://fakestoreapi.com/users')
}

logIn(username:String,password:String):Observable<any>
{
    const body={
        username: username,
        password: password
    }
    return this.http.post<any>('https://fakestoreapi.com/auth/login',body)

}

getCategories():Observable<any>
{
    return this.http.get<any>('https://fakestoreapi.com/products/categories')
}

getData(category:String):Observable<CategoryData[]>
{
    return this.http.get<CategoryData[]>(`https://fakestoreapi.com/products/category/${category}`)
}

}
