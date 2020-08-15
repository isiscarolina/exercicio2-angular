import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  personas: any [];

  constructor(personasServ:PersonasService) { 

    personasServ.getTodos()
    .subscribe(personas => this.personas = personas ["results"]);
  }


  ngOnInit(): void {
  }

}
