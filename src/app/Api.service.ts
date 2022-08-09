import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from './User';
import { TokenService } from './Token.service';
import { CategoryData } from './CategoryData';

@Injectable({
    providedIn:'root'
})
export class ApiService {

constructor(private http: HttpClient, private token:TokenService) { }


getUsers():Observable<User[]>
{
    return this.http.get<User[]>('https://fakestoreapi.com/users').pipe(
        catchError(err => {
            throw 'Error';
        }))

}

logIn(username:String,password:String):Observable<any>
{
    const body={
        username: username,
        password: password
    }
    return this.http.post<any>('https://fakestoreapi.com/auth/login',body).pipe(
        catchError(() => {
            throw 'Error';
        }))
}

getCategories():Observable<any>
{
    return this.http.get<User[]>('https://fakestoreapi.com/products/categories').pipe(
        catchError(err => {
            throw 'Error';
        }))
}

getData(category:String):Observable<CategoryData[]>
{
    return this.http.get<CategoryData[]>(`https://fakestoreapi.com/products/category/${category}`).pipe(
        catchError(err => {
            throw 'Error';
        }))
}
}
