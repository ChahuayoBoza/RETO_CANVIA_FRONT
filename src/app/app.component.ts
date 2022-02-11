import { Component, OnInit } from '@angular/core';
import { EspecialidadModel } from './domain/especialidad/model/especialidad.model';
import { GetAllEspecialidadesUseCase } from './domain/especialidad/usecases/get-all-especialidades.usecase';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PostEspecialidadUsecase } from './domain/especialidad/usecases/post-especialidad.usecase';
import { PutEspecialidadUsecase } from './domain/especialidad/usecases/put-especialidad.usecase';
import { DeleteEspecialidadByIdUsecase } from './domain/especialidad/usecases/delete-especialidad.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auna';
  lista: any[] = [];
  verModalNuevo = false;
  verModalEditar = false;
  verModalBorrar = false;
  especialiadEdit: any = {};

  // ICONOS
  faPlus = faPlus;
  

  constructor(
    private getAllEspecialidades: GetAllEspecialidadesUseCase,
    private postEspecialidad: PostEspecialidadUsecase,
    private putEspecialidad: PutEspecialidadUsecase,
    private deleteEspecialiad: DeleteEspecialidadByIdUsecase
  ){}

  ngOnInit(): void {
    this.loadEspecialidades();
  }

  loadEspecialidades(): void {
    this.lista = [];
    this.getAllEspecialidades.execute().subscribe((especialidad: EspecialidadModel) => {
      this.lista.push(especialidad);
    });
  }

  openModalNuevo(): void {
    this.verModalNuevo = true;
  }

  closeModalNuevo(): void {
    this.verModalNuevo = false;
  }

  openModalEditar(especialidad: any): void {
    this.especialiadEdit = especialidad;
    this.verModalEditar = true;
  }

  closeModalEditar(): void {
    this.verModalEditar = false;
  }

  openModalBorrar(especialidad: any): void {
    this.especialiadEdit = especialidad;
    this.verModalBorrar = true;
  }

  closeModalBorrar(): void {
    this.verModalBorrar = false;
  }

  onSave(especialidad: any): void {
    this.postEspecialidad.execute(especialidad).subscribe(res => {
      if (res.status === 1) {
        this.loadEspecialidades();
        this.closeModalNuevo();
      } else {
        alert('Ha ocurrido un error');
      }
    });
  }

  onUpdate(especialidad: any): void {
    this.putEspecialidad.execute(especialidad).subscribe(res => {
      if (res.status === 1) {
        this.loadEspecialidades();
        this.closeModalEditar();
      } else {
        alert('Ha ocurrido un error');
      }
    });
  }

  onDelete(id: number): void {
    this.deleteEspecialiad.execute(id).subscribe(res => {
      if (res.status === 1) {
        this.loadEspecialidades();
        this.closeModalBorrar();
      } else {
        alert('Ha ocurrido un error');
      }
    });
  }
}
