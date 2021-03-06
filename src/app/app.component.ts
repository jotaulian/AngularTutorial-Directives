import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'List of People';
  personas: Persona[] = [];

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice: number) => alert(`El indice es: ${indice}`)
                );
              }

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

}
