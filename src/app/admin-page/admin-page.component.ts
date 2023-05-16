import { Component, OnInit } from '@angular/core';
import { Comanda } from '../comanda';
import { ServiceComandaService } from '../service-comanda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggedService } from '../logged.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit{

  listaComenzi: Comanda[] | undefined;
  id!:number;
  constructor(private comandaService: ServiceComandaService,
    private router: Router,private route: ActivatedRoute,private LoggedService: LoggedService){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
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
  lista_useriLogati() {
    this.router.navigate(['user-logati',this.id]);
    } 
    generateXML() {
        this.LoggedService.createXML().subscribe(data=>{
          console.log(data);
        })
      }
}
