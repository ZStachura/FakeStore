import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { TokenService } from './Token.service';
import { ApiService } from './Api.service';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { Authinterceptor } from './Authinterceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [			
    AppComponent,
    DialogComponent
   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: Authinterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
