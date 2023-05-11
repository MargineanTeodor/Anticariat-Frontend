import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginServiceService } from '../login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-logati',
  templateUrl: './user-logati.component.html',
  styleUrls: ['./user-logati.component.css']
})
export class UserLogatiComponent implements OnInit 
{ 
  users: User[] | undefined;
  id!:number;
  constructor(private loginService: LoginServiceService,
    private router: Router,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getlist();
  }
  getlist()
  {
    this.loginService.logati().subscribe(data=>{
      this.users=data;
    })
  }
  back()
  {
    this.router.navigate([`admin-page`,this.id]);
  }
}
