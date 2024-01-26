import { Component, OnInit } from '@angular/core';
import { FormularioTareasSandbox } from '../formulario-tareas.sandbox';

@Component({
  selector: 'app-formulario-tareas',
  templateUrl: './formulario-tareas.component.html',
  styleUrls: ['./formulario-tareas.component.scss']
})
export class FormularioTareasComponent implements OnInit{
  constructor(public formularioTareasSandbox: FormularioTareasSandbox) { }

  ngOnInit(): void {
    // this.formularioTareasSandbox.crearTarea();
  }
}
