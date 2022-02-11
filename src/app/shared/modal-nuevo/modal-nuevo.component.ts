import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-nuevo',
  templateUrl: './modal-nuevo.component.html',
  styleUrls: ['./modal-nuevo.component.css']
})
export class ModalNuevoComponent implements OnInit {
  faTimes = faTimes;
  faSave  = faSave;
  formGroup: FormGroup;

  @Output()
  cerrarModal = new EventEmitter<void>();

  @Output()
  guardar = new EventEmitter<any>();

  constructor() {
    this.formGroup = this.createForm();
  }

  ngOnInit(): void {
  }

  get nombre(): any { return this.formGroup.get('nombre'); }
  get descripcion(): any { return this.formGroup.get('descripcion'); }

  createForm(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  closeModal(): void {
    this.cerrarModal.emit();
  }

  guardarRegistro(): void {
    this.guardar.emit(this.formGroup.value);
  }

  resetForm(): void {
    this.formGroup.reset();
  }

}
