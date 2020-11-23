import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { PlayFormComponent } from './components/play-form/play-form.component';
import { FormsModule } from '@angular/forms';
import { PlayService } from './services/playService';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PlayFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
