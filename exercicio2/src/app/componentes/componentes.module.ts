

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component'

@NgModule({
  declarations: [
    PersonasComponent,
    PersonaComponent,
    
  ],
  imports: [
    CommonModule
  ],

  exports: [
    PersonasComponent,
    PersonaComponent,
   
  ]

})
export class ComponentesModule { }
