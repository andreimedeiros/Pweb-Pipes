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
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from './shared/pipes/pipes.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PipesModule,
    MatInputModule,
    FormsModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    GamesModule,
    InterfaceModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
