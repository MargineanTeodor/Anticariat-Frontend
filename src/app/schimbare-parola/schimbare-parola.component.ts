import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginServiceService } from '../login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schimbare-parola',
  templateUrl: './schimbare-parola.component.html',
  styleUrls: ['./schimbare-parola.component.css']
})
export class SchimbareParolaComponent{
  user : User= new User();
  id !:number;
  constructor( private userService: LoginServiceService,
    private router: Router,
    private route: ActivatedRoute){}
    ngOnInit(): void{
      this.id=this.route.snapshot.params['id'];
      this.userService.getuserByid(this.id).subscribe(data=>
        {
          this.user=data;
        })
    }
    onSubmit() {
      this.userService.swapPassw(this.user.id,this.user.passw,this.user).subscribe(data=>{console.log(data)})
      this.router.navigate(['carti',this.id]);
    }
    
}
