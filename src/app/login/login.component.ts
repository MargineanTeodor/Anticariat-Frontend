import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user : User = new User();
  id!: number;
  string: String="";
  bool :Boolean = new Boolean();
  constructor(private userService:LoginServiceService,
    private router: Router){}
  ngOnInit(): void {
    this.getUser();
    console.log(this.user);
  }
  login()
  {
    const x=this.userService.login(this.string).subscribe(data=>{
      this.bool = data;
    },
    error => console.log(error));
    return x;
  }
  getUser()
  {
    this.string="?nume="+this.user.name;
    const x= this.userService.findUserByname(this.string).subscribe(data =>{
      this.user=data;
    },
    error=> console.log(error));
  }
  login2()
  {
    console.log(this.user);
    const x =this.userService.login2(this.user.id , this.user).subscribe(data=>{},error => console.log(error))
  }
  onSubmit(){
    this.string="?nume="+this.user.name+"&passw="+this.user.passw;
    this.login();
    this.login2();
    this.goToCarteList();
    
  }
  goToCarteList()
  {
    this.getUser();
    console.log(this.user);
    if( this.bool == true)
    {
      if(this.user.admin==true)
      this.router.navigate(['/admin-page',this.user.id]);
    else 
      this.router.navigate(['carti',this.user.id]);
    }
  }
  onRegister()
  {
    this.router.navigate(['register']);
  }
}
