import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  //@Output() personaCreada = new EventEmitter<Persona>();
  nombreInput:string;
  apellidoInput:string;


  constructor(private loggingService:LoggingService,
    private personaService:PersonasService){}

  agregarPersona(){
    let persona1 = new Persona(
      this.nombreInput,
      this.apellidoInput);
    //this.loggingService.enviaMensajeAConsola('Enviamos persona con nombre:' + persona1.nombre + ', apellido:' + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }

}
