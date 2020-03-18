import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import {HttpClientModule} from '@angular/common/http';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import { FormsModule } from '@angular/forms';
import { UpdateChaussureComponent } from './components/update-chaussure/update-chaussure.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    ChaussureComponent,
    ChaussureDetailComponent,
    AddChaussureComponent,
    UpdateChaussureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
