import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { CartiService } from '../carti.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-carte',
  templateUrl: './update-carte.component.html',
  styleUrls: ['./update-carte.component.css']
})
export class UpdateCarteComponent implements OnInit {
  carte: Carti = new Carti();
  string: string= "";
  id!: number;
  id2!: number;
  constructor( private carteService: CartiService,
    private router: Router,
    private route: ActivatedRoute){}
  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
    this.id2= this.route.snapshot.params['id2'];
    this.carteService.getCarteById(this.id).subscribe(data=>
      {
        this.carte=data;
      })
  }
  updateCarte()
  {
    this.carteService.updateCarte(this.carte,this.id).subscribe(data=>{
      console.log(data);
    },
    error => console.log(error));
  }
  onSubmit(){
    this.updateCarte();
    this.goToCarteList();
  }
  goToCarteList()
  {
    this.router.navigate(['/carti',this.id2]);
  }
}
