import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { ActivatedRoute } from '@angular/router';
import { CartiService } from '../carti.service';

@Component({
  selector: 'app-carte-details',
  templateUrl: './carte-details.component.html',
  styleUrls: ['./carte-details.component.css']
})
export class CarteDetailsComponent implements OnInit {
  id!: number
  carte!: Carti
  constructor( private route: ActivatedRoute,
    private carteService: CartiService){}
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.carte= new Carti();
    this.carteService.getCarteById(this.id).subscribe(data =>
      {
        this.carte=data;
      })
  }

}
