import { Component, OnInit } from '@angular/core';
import {Carti} from '../carti'
import { CartiService } from '../carti.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carti-list',
  templateUrl: './carti-list.component.html',
  styleUrls: ['./carti-list.component.css']
})
export class CartiListComponent implements OnInit{
  listaCarti: Carti[] | undefined;
  constructor(private cartiService: CartiService,
    private router: Router){}
  ngOnInit(): void {
    this.getCarti();
  }
  private getCarti(){
    this.cartiService.getCarteList().subscribe(data =>
    {
      this.listaCarti = data;
    });
  }
  updateCarte(id:number)
  {
    this.router.navigate(['update-carte',id]);
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
    this.router.navigate(['carte-details', id]);
  }
}
