import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  constructor(private http:HttpClient) { }
  getInfo(username:string){
     
    // const url2 = "https://api.github.com/users/SMetto20/repos"
    return this.http.get(environment.userUrl + "/" + username + "?"+ environment.apiToken) 
   }
 getRepo(username:string){
   return this.http.get(environment.userUrl + "/" + username + "/repos?"+ environment.apiToken) 
 }
}
