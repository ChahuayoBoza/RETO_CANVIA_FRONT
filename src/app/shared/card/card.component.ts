import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  @Input() especialidad: any;

  @Output()
  eventEdit = new EventEmitter<any>();

  @Output()
  eventBorrar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(especialidad: any): void {
    this.eventEdit.emit(especialidad);
  }

  borrar(especialidad: any): void {
    this.eventBorrar.emit(especialidad);
  }

}
