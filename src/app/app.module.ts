import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { TokenService } from './Token.service';
import { ApiService } from './Api.service';

import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { Authinterceptor } from './Authinterceptor';

@NgModule({
  declarations: [			
    AppComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: Authinterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
