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
   
    this.githubservice.getInfo(username.value.username).subscribe((data)=>{
      console.log(data)
      this.users = data
    })
  }
  repoCheck(username:NgForm){
    
    this.githubservice.getRepo(username.value.username).subscribe((data)=>{
      console.log(data)
      this.users = data
    })
  }

  ngOnInit(): void {
  }

}
