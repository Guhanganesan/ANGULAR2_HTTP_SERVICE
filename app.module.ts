import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from'@angular/http';
import { AppComponent } from './app.component';
import{FormsModule}from'@angular/forms';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     HttpModule, BrowserModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
