import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../../services/personas.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  id: number;

  persona: any;

  constructor(private route: ActivatedRoute, private personasServ: PersonasService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      
      this.personasServ.getPersona(this.id)
      .subscribe(persona => {
        this.persona = persona;
        console.log(this.persona);
      });
    });



  }

}
