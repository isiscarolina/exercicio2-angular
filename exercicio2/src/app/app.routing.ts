import { Routes, RouterModule } from '@angular/router';

import{ PersonasComponent } from './componentes/personas/personas.component';
import{ PersonaComponent } from './componentes/persona/persona.component';





const APP_ROUTES: Routes = [
    
    { path: 'personas',component: PersonasComponent  },
    { path: 'persona/:id',component: PersonaComponent  },

];

export const routing = RouterModule.forRoot(APP_ROUTES);