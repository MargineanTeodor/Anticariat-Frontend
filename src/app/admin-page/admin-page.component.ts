import { Component, OnInit } from '@angular/core';
import { Comanda } from '../comanda';
import { ServiceComandaService } from '../service-comanda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{
  listaComenzi: Comanda[] | undefined;
  constructor(private comandaService: ServiceComandaService,
    private router: Router){}
  ngOnInit(): void {
    this.getlist();
  }
  updatePlata(id:number, comanda: Comanda)
  {
    this.comandaService.setplatit(id,comanda).subscribe(data=>{});
    this.getlist();
  }
  getlist()
  {
    this.comandaService.listaComenzi().subscribe(data=>{
      this.listaComenzi=data;
    })
  }
}
