import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn:'root'
    }
)
export class TokenService {

constructor() { }

token:any=""

storeToken(token:any){
    this.token=token;
}

getToken(){
    return this.token;
}
}
