import { Component, OnInit } from '@angular/core';
import { Carti } from '../carti';
import { CartiService } from '../carti.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-carte',
  templateUrl: './create-carte.component.html',
  styleUrls: ['./create-carte.component.css']
})
export class CreateCarteComponent implements OnInit {
  carte: Carti = new Carti();
  string: String= new String();
  id !:number;
  labelContent!:string;
  labelContent2!:string;
  labelContent3!:string;
  labelContent4!:string;
  labelContent5!:string;
  constructor( private carteService: CartiService,
    private router: Router){}
  ngOnInit(): void{
    this.id=1;
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
    this.router.navigate(['/carti',this.id]);
  }
  onSubmit(){
    if(this.carte.stare>=1 && this.carte.stare<=10 && this.carte.stare>10 && this.carte.autor.length>=5 && this.carte.autor.length<=40 && this.carte.name.length>=5 && this.carte.name.length<=40)
    {
      console.log(this.carte);
      this.string="";
      this.string="?userId="+this.carte.user+"&nume="+this.carte.name+"&pret="+this.carte.pret+"&nrPag="+this.carte.nrPag+"&stare="+this.carte.stare+"&autor="+this.carte.autor;
      console.log(this.string);
      this.saveCarte();
      this.goToCarteList();
    }
    else
      this.updateLabel();
  }
  updateLabel()
  {
    this.labelContent="Verificati ca toate cerintele sa fie indeplinite:";
    this.labelContent2="Pretul sa fie mai mare ca 10\n";
    this.labelContent3="Starea sa fie cuprinsa intre 1 si 10\n";
    this.labelContent4="Numele sa fie intre 6 si 40 de caractere\n";
    this.labelContent5= "Autorul sa fie intre 6 si 40 de caractere";
  }
}
