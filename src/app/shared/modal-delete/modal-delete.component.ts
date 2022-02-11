import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {
  faTimes = faTimes;
  faSave  = faSave;
  faTrash = faTrash;

  @Input()
  especialidad: any;

  @Output()
  cerrarModal = new EventEmitter<void>();

  @Output()
  borrar = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.cerrarModal.emit();
  }

  borrarRegistro(): void {
    this.borrar.emit(this.especialidad.id);
  }

}
