import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { ActivatedRoute, Router } from '@angular/router';
import { CartiService } from '../carti.service';
import { Comanda } from '../comanda';
import { ServiceComandaService } from '../service-comanda.service';

@Component({
  selector: 'app-carte-details',
  templateUrl: './carte-details.component.html',
  styleUrls: ['./carte-details.component.css']
})
export class CarteDetailsComponent implements OnInit {
  id!: number;
  id2!: number;
  comanda:Comanda = new Comanda();
  carte!: Carti;
  string :String = new String();
  constructor( private route: ActivatedRoute,
    private carteService: CartiService,
    private comandaService: ServiceComandaService,
    private router: Router){}
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.id2= this.route.snapshot.params['id2'];
    this.carte= new Carti();
    this.carteService.getCarteById(this.id).subscribe(data =>
      {
        this.carte=data;
      })
  }
  deleteCarte(id:number)
  {
    this.carteService.deleteCarte(id).subscribe(data=>
      {
        console.log(data);
      })
  }
  goToCarteList()
  {
    this.router.navigate(['carti',this.id2]);
  }
  createComanda()
  {
    this.comandaService.createComanda(this.carte.pret,this.comanda).subscribe(data=>{})
  }
  onSubmit()
  {
    this.comanda.pret=this.carte.pret;
    this.comanda.platita=false;
    this.createComanda();
    this.deleteCarte(this.carte.id);
    this.goToCarteList();
  }

}
