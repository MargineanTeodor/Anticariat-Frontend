import { Component, OnInit } from '@angular/core';
import {Carti} from '../carti'
import { CartiService } from '../carti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { User } from '../user';
@Component({
  selector: 'app-carti-list',
  templateUrl: './carti-list.component.html',
  styleUrls: ['./carti-list.component.css']
})
export class CartiListComponent implements OnInit{
  listaCarti: Carti[] | undefined;
  id!: number;
  user!: User;
  string: String="";
  constructor(private cartiService: CartiService,
    private userService : LoginServiceService,
    private router: Router,
    private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getUser()
    this.getCarti();
  }
  private getCarti(){
    this.cartiService.getCarteList().subscribe(data =>
    {
      this.listaCarti = data;
    });
  }
  getUser()
  {
    this.string="?nume="+this.user.name;
    const x= this.userService.getuserByid(this.id).subscribe(data=>{
      this.user=data;
    },
    error=> console.log(error));
  }
  updateCarte(id:number)
  {
    this.router.navigate(['update-carte',id,this.id]);
  }
  deleteCarte(id:number)
  {
    this.cartiService.deleteCarte(id).subscribe(data=>
      {
        console.log(data);
        this.getCarti();
      })
  }
  carteDetails(id:number)
  {
    this.router.navigate(['carte-details', id,this.id]);
  }
  onLogout()
  {
    this.logout();
    this.router.navigate(['login']);
  }
  schimba_parola()
  {
    this.router.navigate(['schimbare-parola',this.id]);
  }
  logout()
  {
    this.userService.logout(this.id,this.user).subscribe(data =>{});
  }
}
