import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  faTimes = faTimes;
  faSave  = faSave;
  formGroup: FormGroup;

  @Input()
  especialidad: any;

  @Output()
  cerrarModal = new EventEmitter<void>();

  @Output()
  guardar = new EventEmitter<any>();

  constructor() {
    this.formGroup = this.createForm();
  }

  ngOnInit(): void {
    this.formGroup.setValue(this.especialidad);
  }

  get nombre(): any { return this.formGroup.get('nombre'); }
  get descripcion(): any { return this.formGroup.get('descripcion'); }

  createForm(): FormGroup {
    return new FormGroup({
      id: new FormControl({disabled: true}, [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(5)]),
      estado: new FormControl('')
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
