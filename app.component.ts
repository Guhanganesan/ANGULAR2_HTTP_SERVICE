import { Component } from '@angular/core';
import{HttpService}from'./http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})
export class AppComponent  {
  title = 'Angular 2';
   data:any;
  constructor(private myservice:HttpService)
  {
    
  }
  
 getValue()
 {
       this.myservice.fetchData() .subscribe(result=>{this.data=result;});
 }
  ngOnInit()
  {
      this.getValue();
  }
  
}
