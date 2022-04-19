import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubserviceService } from 'src/app/service/github.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  users:any =[];
  constructor(private githubservice:GithubserviceService) { }
  nameCheck(username:NgForm){
   
    this.githubservice.getInfo(username.value.username).subscribe((res)=>{
      console.log(res)
      this.users = res
    })
  }
  repoCheck(username:NgForm){
    
    this.githubservice.getRepo(username.value.username).subscribe((res)=>{
      console.log(res)
      this.users = res
    })
  }
 repository ="these are the"
  ngOnInit(): void {
  }

}
