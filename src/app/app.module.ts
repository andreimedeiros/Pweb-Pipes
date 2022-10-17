import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GamesModule } from './games/games.module';
import { InterfaceModule } from './interface/interface.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    GamesModule,
    InterfaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
