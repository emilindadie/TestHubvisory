import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApiKeyInterceptor } from './interceptor/api-key.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyApiKeyInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
