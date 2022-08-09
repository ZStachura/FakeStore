import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IfRetryService {

constructor() { }
retry:boolean=false

storeRetry(retry:boolean){
    this.retry=retry;
}

getRetry(){
    return this.retry;
}

}
