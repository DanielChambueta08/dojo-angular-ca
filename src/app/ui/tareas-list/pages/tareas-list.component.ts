import { Component, OnInit } from '@angular/core';
import { TareasListSandbox } from '../tareas-list.sandbox';

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrls: ['./tareas-list.component.scss']
})
export class TareasListComponent implements OnInit{
  constructor(public tareasListSandbox: TareasListSandbox) { }
  ngOnInit(): void {
      this.tareasListSandbox.listarTareas();
  }
}
