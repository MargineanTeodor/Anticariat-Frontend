import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginComponent } from '../login/login.component';
import { LoginServiceService } from '../login-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  string: String="";
  constructor( private userService: LoginServiceService,
    private router:Router)
    {}
    ngOnInit(): void {
      
    }
    register()
    {
      this.userService.register(this.string,this.user).subscribe(data=>{
        console.log(data);
      },
      error => console.log(error));
    }
    onSubmit()
    {
      this.string="?nume="+this.user.name+"&parola="+this.user.passw;
      console.log(this.user);
      console.log(this.string);
       this.register();
    }
}
