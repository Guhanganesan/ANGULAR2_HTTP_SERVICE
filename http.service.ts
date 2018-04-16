
import{Http,Response} from '@angular/http';
import'rxjs/add/operator/map';
import{Injectable}from'@angular/core';
@Injectable()

export class HttpService
{
    
    constructor( private m:Http)
    {

    }

    ngOnInit()
    {
        
    }
    fetchData()
    {
     return this.m.get("https://jsonplaceholder.typicode.com/users").map(result=>result.json());
      
    }

}
