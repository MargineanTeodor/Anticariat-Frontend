import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { ActivatedRoute, Router } from '@angular/router';
import { CartiService } from '../carti.service';
import { Comanda } from '../comanda';
import { ServiceComandaService } from '../service-comanda.service';
import { Review } from '../review';
import { ReviewServiceService } from '../review-service.service';

@Component({
  selector: 'app-carte-details',
  templateUrl: './carte-details.component.html',
  styleUrls: ['./carte-details.component.css']
})
export class CarteDetailsComponent implements OnInit {
  id!: number;
  id2!: number;
  review: Review= new Review();
  listaReview : Review[] | undefined;
  comanda:Comanda = new Comanda();
  carte!: Carti;
  string :String = new String();
  constructor( private route: ActivatedRoute,
    private carteService: CartiService,
    private comandaService: ServiceComandaService,
    private router: Router,
    private ReviewsService: ReviewServiceService){}
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.id2= this.route.snapshot.params['id2'];
    this.carte= new Carti();
    this.getListreview();
    this.carteService.getCarteById(this.id).subscribe(data =>
      {
        this.carte=data;
      })
  }
  getListreview()
  {
    this.ReviewsService.getList(this.id).subscribe(data=>{
      this.listaReview=data;
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
  onSubmit2() {
    this.review.idCarte=this.id;
    this.ReviewsService.addReview(this.review.review,this.id,this.review).subscribe(data=>{
      console.log(this.review);
    })
    this.getListreview();
    }

}
