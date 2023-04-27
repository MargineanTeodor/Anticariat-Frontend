import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { CartiService } from '../carti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-carti-autor',
  templateUrl: './lista-carti-autor.component.html',
  styleUrls: ['./lista-carti-autor.component.css']
})
export class ListaCartiAutorComponent implements OnInit {
  listaCarti: Carti[] | undefined;
  nume:String= new String();
  constructor(private cartiService: CartiService,
    private router: Router){}
  ngOnInit(): void {

  }
  private getCartiNume()
  {
    this.cartiService.getCarteListByAutor("?nume="+this.nume).subscribe(data =>{this.listaCarti=data;});
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
        this.getCartiNume();
      })
  }
  carteDetails(id:number)
  {
    this.router.navigate(['carte-details', id]);
  }
  onSubmit(){
    this.getCartiNume();
  }

}
