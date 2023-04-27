import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { CartiService } from '../carti.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-carte',
  templateUrl: './create-carte.component.html',
  styleUrls: ['./create-carte.component.css']
})
export class CreateCarteComponent implements OnInit {
  carte: Carti = new Carti();
  string: String= new String();
  constructor( private carteService: CartiService,
    private router: Router){}
  ngOnInit(): void{
    this.string="";
    this.carte.user=1;
  }
  saveCarte()
  {
    this.carteService.createCarte(this.carte,this.string).subscribe(data=>{
      console.log(data);
    },
    error => console.log(error));
  }
  goToCarteList()
  {
    this.router.navigate(['/carti']);
  }
  onSubmit(){
    console.log(this.carte);
    this.string="";
    this.string="?userId="+this.carte.user+"&nume="+this.carte.name+"&pret="+this.carte.pret+"&nrPag="+this.carte.nrPag+"&stare="+this.carte.stare+"&autor="+this.carte.autor;
    console.log(this.string);
    this.saveCarte();
    this.goToCarteList();
  }
}
